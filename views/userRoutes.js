const userController = require('../controllers/userController');

const router = require('express').Router();

router.get('/', userController.getUserProfile);
router.put('/', userController.updateUserProfile);

module.exports = router;