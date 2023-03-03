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
    return res.json(newUser);
    } catch (error) {
    // Enviar un mensaje de error si hay algún problema
    return res.status(500).send(error.message);
    } 
};

authController.getUserProfile = (req,res) => {return res.send('Ver perfil de User')};
authController.updateUserProfile = (req,res) => {return res.send('Cambiar información de User')};





module.exports = authController;