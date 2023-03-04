const router = require('express').Router();

const authController = require('../controllers/authController');

router.post('/register', authController.createUserProfile);
router.post('/login', authController.userLogin);
router.put('/profile', authController.updateUserProfile);

module.exports = router;