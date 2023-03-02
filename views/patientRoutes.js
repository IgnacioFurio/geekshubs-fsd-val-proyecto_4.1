const patientController = require('../controllers/patientController');

const router = require('express').Router();

router.get('/', patientController.getPatientInfo);

module.exports = router;