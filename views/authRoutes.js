const authController = require('../controllers/authController');

const router = require('express').Router();

router.post('/register', authController.createUserProfile);
router.post('/login', authController.userLogin);
router.put('/', authController.updateUserProfile);

module.exports = router;