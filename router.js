const router = require('express').Router();
const patientRoutes = require('./views/patientRoutes');
const doctorRoutes = require('./views/doctorRoutes');
const appointmentRoutes = require('./views/appointmentRoutes');

router.use('/patient', patientRoutes);
router.use('/doctor', doctorRoutes);
router.use('/appointment', appointmentRoutes);


module.exports = router;