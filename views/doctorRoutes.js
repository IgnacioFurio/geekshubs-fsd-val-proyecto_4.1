const doctorController = require('../controllers/doctorController');
const verifyToken = require('../middleware/verifyToken')

const router = require('express').Router();

router.get('/appointment/', verifyToken, doctorController.getDoctorAppointment);

module.exports = router;