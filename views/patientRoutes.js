const patientController = require('../controllers/patientController');

const router = require('express').Router();

router.put('/', patientController.createPatient);
router.get('/', patientController.getPatientInfo);
router.get('/appointment/', patientController.getPatientAppointment);

module.exports = router;