const userController = {};

userController.getUserProfile = (req,res) => {return res.send('Ver perfil de Usuario')}
userController.updateUserProfile = (req,res) => {return res.send('Cambiar datos de Usuario')};

module.exports = userController;