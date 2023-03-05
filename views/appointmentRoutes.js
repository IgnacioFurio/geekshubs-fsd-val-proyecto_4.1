
const appointmentController = require('../controllers/appointmentController');
const verifyToken = require('../middleware/verifyToken');

const router = require('express').Router();


// router.get('/', appointmentController.getTodayAppointment);
router.post('/newAppointment', verifyToken, appointmentController.createAppointment);
router.get('/', verifyToken, appointmentController.getAppointment);
router.put('/', verifyToken, appointmentController.updateAppointment);
router.delete('/', verifyToken, appointmentController.deleteAppointment);


module.exports = router;