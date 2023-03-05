const { Doctor } = require('../models')

const doctorController = {};

doctorController.getDoctorAppointment = async (req,res) => {
    try {
        const doctor = req.userId;
        console.log(doctor);
        const newConsult = await Doctor.findAll()

        return res.json(
        {
            succes: true,
            message: 'Doctors Appointment',
            data: newConsult
        }
    );
    } catch (error) {
        return res.json(
            {
                succes: false,
                message: error.message
            }
        )
    }
}; 

module.exports = doctorController;