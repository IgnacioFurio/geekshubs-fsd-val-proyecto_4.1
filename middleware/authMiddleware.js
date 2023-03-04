const jwt = require('jsonwebtoken');
const { User } = require('../models');

const authMiddleware = async (req, res, next) => {
  try {
    // Obtener el token de autorización del encabezado
    const authHeader = req.headers.authorization;
    const token = authHeader.split(' ')[1];

    // Verificar si el token existe
    if (!token) {
      return res.status(401).json({ message: 'Access denied. No token provided.' });
    }

    // Verificar el token
    const decodedToken = jwt.verify(token, process.env.JWT_SECRET);
    const userId = decodedToken.userId;

    // Buscar el usuario en la base de datos
    const user = await User.findOne({
      where: { id: userId },
      attributes: { exclude: ['password'] }
    });

    // Verificar si el usuario existe
    if (!user) {
      return res.status(401).json({ message: 'Access denied. Invalid token.' });
    }

    // Agregar el usuario a la solicitud
    req.user = user;

    // Continuar con la siguiente función de middleware
    next();
  } catch (error) {
    console.error(error);
    return res.status(500).json({ message: 'Internal server error' });
  }
};

module.exports = authMiddleware;
