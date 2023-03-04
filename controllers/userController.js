const { User } = require('../models');
const userController = {};

userController.getUserProfile =  async (req, res) => {
    try {
      const userId = req.userId;

      const user = await User.findByPk(
        userId,
        {
          attributes: 
          {
            exclude: ["password"]
          },
        }
      );
  
      if (!user) {
        return res.status(404).json({ message: 'User not found' });
      }
  
      return res.json(
        {
          succes: true,
          message: 'User information',
          data: user
        }
      );
    } catch (error) {
      console.error(error);
      return res.status(500).json(
        { 
          message: 'Internal server error' 
        }
      );
    }
  };

userController.updateUserProfile = (req,res) => {
  try {
    const userId = req.userId;
    


    return res.json(
      {
        succes: true,
        message: 'Cambiar datos de Usuario',
        data: userId
      }
    );
  } catch (error) {
    return res.status(500).send(error.message);
  }
};

module.exports = userController;