const patientController = require('../controllers/patientController');
const verifyToken = require('../middleware/verifyToken');

const router = require('express').Router();

router.put('/new', verifyToken, patientController.createPatient);
router.get('/:id', patientController.getPatientInfo);
router.get('/appointment/', patientController.getPatientAppointment);

module.exports = router;