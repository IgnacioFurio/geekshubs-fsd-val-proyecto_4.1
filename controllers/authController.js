const authController = {};
const { User } = require('../models');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

authController.createUserProfile = async (req, res) => {
    try {
        const { username, email, password } = req.body;

        const encryptedPassword = bcrypt.hashSync(password, 10);

        if(username === "" || email === "" || password === ""){
            return res.status(506).json(
                {
                    succes: false,
                    message: "You must fill all the fields"
                }
            );
        } else if (!/.{8,}$/.test(password)){
            return res.status(507).json(
                {
                    succes: false,
                    message: "Your password must contain at least eight characters."
                }
            );
        } else if (!/^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/.test(password)){
            return res.status(508).json(
                {
                    succes: false,
                    message: "Your password must contain at least one letter and one number."
                }
            );
        };

        const newUser = await User.create(
            {
            user_name: username,
            email: email,
            password: encryptedPassword,
            role_id: 3
            }
        );

        return res.json(
            {
            success: true,
            message: "User registered",
            data: newUser
            }
        );
    } catch (error) {
        return res.status(500).json(
            {
                succes: false,
                message: 'Something went wrong',
                error: error.message
            }
        );
    } 
};

authController.userLogin = async (req, res) => {
    try {

        const { email, password } = req.body;

        const user = await User.findOne(
            {
                where: 
                {
                    email: email 
                }
            }
        );

        if (!user) {
            return res.status(501).json(
                { 
                    succes: false,
                    message: 'Invalid credentials' 
                }
            );
        }

        const isMatch = await bcrypt.compare(password, user.password);

        if (!isMatch) {
            return res.status(501).json(
                { 
                    succes: false,
                    message: 'Invalid credentials' 
                }
            );
        }

        const token = jwt.sign(
            { 
                userId: user.id,
                userName: user.user_name,
                roleId: user.role_id 
            },
            process.env.JWT_SECRET,
            { 
                expiresIn: '30d' 
            }
        );

        return res.json(
            { 
                succes: true,
                message: "We are glad that you trust us for your dental care.",
                data: token 
            }
        );

    } catch (error) {

        return res.status(500).json(
            {
                succes: false,
                message: 'Something went wrong',
                error: error.message
            }
        );
    };
};


module.exports = authController;