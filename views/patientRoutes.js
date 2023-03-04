const patientController = require('../controllers/patientController');

const router = require('express').Router();

router.put('/new', patientController.createPatient);
router.get('/:id', patientController.getPatientInfo);
router.get('/appointment/', patientController.getPatientAppointment);

module.exports = router;