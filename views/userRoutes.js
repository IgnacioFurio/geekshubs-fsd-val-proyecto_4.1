const userController = require('../controllers/userController');
//const authMiddleware = require('../middleware/authMiddleware');
const router = require('express').Router();

router.get('/:id', userController.getUserProfile);
router.put('/', userController.updateUserProfile);

module.exports = router;