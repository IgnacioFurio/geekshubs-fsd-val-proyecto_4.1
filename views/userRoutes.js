const userController = require('../controllers/userController');
const verifyToken = require('../middleware/verifyToken');

const router = require('express').Router();

router.get('/profile', verifyToken, userController.getUserProfile);
router.put('/profile', verifyToken, userController.updateUserProfile);

module.exports = router;