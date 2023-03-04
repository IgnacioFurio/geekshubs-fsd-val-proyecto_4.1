const jwt = require('jsonwebtoken');

const verifyToken = (req, res, next) => {
  try {
    const token = req.headers.authorization;

    if (!token) {
      return res.status(401).json({ message: 'No token provided' });
    }

    const decoded = jwt.verify(token, process.env.JWT_SECRET)
    console.log(decoded);
    // Añadir la información del usuario decodificada al objeto de solicitud para su posterior uso en otros controladores
    req.userId = decoded.userId;
    req.userName = decoded.userName;
    req.roleId = decoded.roleId;

    next();
  } catch (error) {
    return res.status(500).send(error.message)
  } 
};

module.exports = verifyToken;