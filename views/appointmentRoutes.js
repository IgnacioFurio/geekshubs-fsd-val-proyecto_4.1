
const appointmentController = require('../controllers/appointmentController');
const { route } = require('./patientRoutes');

const router = require('express').Router();


// router.get('/', appointmentController.getAppointment);
router.get('/today', appointmentController.getTodayAppointment);
router.post('/', appointmentController.createAppointment);
router.put('/', appointmentController.updateAppointment);
router.delete('/', appointmentController.deleteAppointment);


module.exports = router;