const jwt = require('jsonwebtoken');

const verifyToken = (req, res, next) => {
  const token = req.headers['authorization'];

  if (!token) {
    return res.status(401).json({ message: 'No token provided' });
  }

  jwt.verify(token, process.env.JWT_SECRET, (err, decoded) => {
    if (err) {
      return res.status(401).json({ message: 'Invalid token' });
    }

    // Añadir la información del usuario decodificada al objeto de solicitud para su posterior uso en otros controladores
    req.userId = decoded.userId;
    req.roleId = decoded.roleId;

    next();
  });
};

module.exports = verifyToken;