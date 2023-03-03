const authController = {};


authController.getUserProfile = (req,res) => {return res.send('Ver perfil de User')};
authController.updateUserProfile = (req,res) => {return res.send('Cambiar información de User')};





module.exports = authController;