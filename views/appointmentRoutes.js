const appointmentController = require('../controllers/appointmentController');
const verifyToken = require('../middleware/verifyToken');
const isAdmin = require('../middleware/isAdmin');

const router = require('express').Router();

router.post('/new', verifyToken, appointmentController.createAppointment);
// router.get('/user-all', verifyToken, appointmentController.getUserAppointment);
router.get('/all', verifyToken, isAdmin, appointmentController.getAllAppointment);
router.put('/modify', verifyToken, appointmentController.updateAppointment);
router.delete('/cancel', verifyToken, appointmentController.deleteAppointment);

module.exports = router;