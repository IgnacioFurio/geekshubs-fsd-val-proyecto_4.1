const authController = {};
const { User } = require('../models');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

authController.createUserProfile = async (req, res) => {
    try {
    const { username, email, password } = req.body;

    const encryptedPassword = bcrypt.hashSync(password, 10);

    const newUser = await User.create(
        {
        user_name: username,
        email: email,
        password: encryptedPassword,
        role_id: 3
        }
    );

    if(newUser.user_name === ""){
        return res.status(501).json(
            {
                succes: false,
                message: "You must have an user name",
                error: error.message
            }
        );
    };
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
            message: 'Invalid credentials',
            error: error.message
        }
        );
    } 
};

authController.userLogin = async (req, res) => {
    try {
    const { email, password } = req.body;
    const user = await User.findOne({where: {email: email }});

    if (!user) {
        return res.status(401).json({ message: 'Invalid email or password' });
    }

    const isMatch = await bcrypt.compare(password, user.password);

    if (!isMatch) {
        return res.status(401).json({ message: 'Invalid user or password' });
    }

    const token = jwt.sign(
        { 
            userId: user.id,
            userName: user.user_name,
            roleId: user.role_id 
        },
        process.env.JWT_SECRET,
        { 
            expiresIn: '999d' 
        }
    );

    return res.json({ token });
    } catch (error) {
    console.error(error);
    return res.status(500).json({ message: 'Internal server error' });
    }
};


module.exports = authController;