const userController = require('../controllers/userController');
const verifyToken = require('../middleware/verifyToken');

const router = require('express').Router();

router.get('/profile', verifyToken, userController.getUserProfile);
router.put('/profile', verifyToken, userController.updateUserProfile);
router.get('/doctor-info', verifyToken, userController.getDoctorData)

module.exports = router;