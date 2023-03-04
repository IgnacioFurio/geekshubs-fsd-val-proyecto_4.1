const { User } = require('../models');
const bcrypt = require('bcrypt');
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

userController.updateUserProfile = async (req,res) => {
  try {

    const { userName, password} = req.body;

    const userId = req.userId;

    if(userName === ""){
      return res.send('Invalid name')
    };

    if(password === ""){
      return res.send('Invalid password')
    };

    const encryptedPassword = bcrypt.hashSync(password, 10);

    const updateUser = await User.update(
      {
        user_name: userName,
        password: encryptedPassword
      },
      {
        where: {
          id: userId
        },
      }
    );

console.log(updateUser);

    if(!updateUser){
      return res.send('User profile without changes')
    };
    


    return res.json(
      {
        succes: true,
        message: 'User profile changed',
        data: updateUser
      }
    );
  } catch (error) {
    return res.status(500).send(error.message);
  }
};

module.exports = userController;