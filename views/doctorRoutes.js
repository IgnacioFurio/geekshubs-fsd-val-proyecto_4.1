const doctorController = require('../controllers/doctorController');

const router = require('express').Router();

router.get('/appointment/', doctorController.getDoctorAppointment);

module.exports = router;