const appointmentController = require('../controllers/appointmentController');
const { route } = require('./patientRoutes');

const router = require('express').Router();

router.get('/', appointmentController.getTodayAppointment);
router.post('/', appointmentController.createAppointment);
router.put('/', appointmentController.updateAppointment);
router.delete('/', appointmentController.deleteAppointment);


module.exports = router;