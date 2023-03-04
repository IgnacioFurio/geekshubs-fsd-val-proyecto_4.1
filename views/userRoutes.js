const userController = require('../controllers/userController');
const verifyToken = require('../middleware/verifyToken');
//const authMiddleware = require('../middleware/authMiddleware');
const router = require('express').Router();

router.get('/profile', verifyToken, userController.getUserProfile);
router.put('/', userController.updateUserProfile);

module.exports = router;