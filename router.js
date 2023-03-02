const router = require('express').Router();
const patientRoutes = require('./views/patientRoutes');
const doctorRoutes = require('./views/doctorRoutes');
const appointmentRoutes = require('./views/appointmentRoutes');
const userRoutes = require('./views/userRoutes');
const authRoutes = require('./views/authRoutes');

router.use('/auth', authRoutes);
router.use('/patient', patientRoutes);
router.use('/doctor', doctorRoutes);
router.use('/appointment', appointmentRoutes);
router.use('/user', userRoutes);


module.exports = router;