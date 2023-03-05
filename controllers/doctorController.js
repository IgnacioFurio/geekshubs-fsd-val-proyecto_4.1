const { Doctor } = require('../models')

const doctorController = {};

doctorController.getDoctorAppointment = async (req,res) => {
    try {
        const doctorId = req.userId;
        console.log(doctorId);
        const newConsult = await Doctor.findAll(
            {
                where: {
                    user_id: doctorId
                }
            }
        )

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