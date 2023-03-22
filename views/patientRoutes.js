const patientController = require('../controllers/patientController');
const verifyToken = require('../middleware/verifyToken');

const router = require('express').Router();

router.post('/new', verifyToken, patientController.createPatient);
router.get('/profile', verifyToken, patientController.getPatientInfo);
router.get('/appointment/', verifyToken, patientController.getPatientAppointment);

module.exports = router;