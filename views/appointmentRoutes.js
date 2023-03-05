
const appointmentController = require('../controllers/appointmentController');
const verifyToken = require('../middleware/verifyToken');

const router = require('express').Router();


// router.get('/', appointmentController.getTodayAppointment);
router.post('/new', verifyToken, appointmentController.createAppointment);
router.get('/all', verifyToken, appointmentController.getAppointment);
router.put('/modify', verifyToken, appointmentController.updateAppointment);
router.delete('/cancel', verifyToken, appointmentController.deleteAppointment);


module.exports = router;