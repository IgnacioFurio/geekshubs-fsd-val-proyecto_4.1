const authController = {};
const { User } = require('../models');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

authController.createUserProfile = async (req, res) => {
    try {
    // Recuperar información de la petición
    const { username, email, password } = req.body;
    // Cifrar la contraseña
    const encryptedPassword = bcrypt.hashSync(password, 10);
    // Crear un nuevo usuario en la base de datos
    const newUser = await User.create({
        user_name: username,
        email,
        password: encryptedPassword,
        role_id: 3 // Establecer el rol del usuario
    });
    // Devolver la información del nuevo usuario
    return res.json({
      success: true,
      message: "User registered",
      data: newUser
  });
    } catch (error) {
    // Enviar un mensaje de error si hay algún problema
    return res.status(500).send(error.message);
    } 
};

authController.userLogin = (req,res) => {return res.send('User connected')};
authController.updateUserProfile = (req,res) => {return res.send('Cambiar información de User')};

const userLogin = async (req, res) => {
    try {
      const { email, password } = req.body;
      const user = await User.findOne( {email: email });
  
      if (!user) {
        return res.status(401).json({ message: 'Invalid email or password' });
      }
  
      const isMatch = await bcrypt.compare(password, user.password);
  
      if (!isMatch) {
        return res.status(401).json({ message: 'Invalid email or password' });
      }
  
      const token = jwt.sign(
        { userId: user.id, roleId: user.role_id },
        process.env.JWT_SECRET,
        { expiresIn: '999d' }
      );
  
      return res.json({ token });
    } catch (error) {
      console.error(error);
      return res.status(500).json({ message: 'Internal server error' });
    }
  };
  module.exports = userLogin;


module.exports = authController;
