const authController = require('../controllers/authController');

const router = require('express').Router();

router.post('/register', authController.createUserProfile);
router.get('/', authController.getUserProfile);
router.put('/', authController.updateUserProfile);

module.exports = router;