const { User, Patient } = require('../models');
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
            exclude: ["id", "password", "role_id"]
          },
          include: 
          {
            model: Patient,
            attributes: 
            {
              exclude: ["id", "user_id"]
            }
          }
        }
      );
  
      if (!user) {
        return res.status(504).json(
          { 
            succes: false,
            message: 'User not found' 
          }
        );
      }
  
      return res.json(
        {
          succes: true,
          message: 'User information',
          data: user
        }
      );

    } catch (error) {

      return res.status(500).json(
        { 
          succes: false,
          message: 'Something went wront.',
          data: error.message 
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