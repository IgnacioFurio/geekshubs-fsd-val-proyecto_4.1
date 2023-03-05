const { Doctor, Appointment, Patient } = require('../models')

const doctorController = {};

doctorController.getDoctorAppointment = async (req,res) => {
    try {
        const doctorId = req.userId;

        const newConsult = await Doctor.findAll(
            {
                where: 
                {
                    user_id: doctorId
                }, 
                include: 
                {
                    model: Appointment,
                    include:
                    {
                        model: Patient,
                        attributes: {
                            exclude:["createdAt", "updatedAt"]
                        }
                    },
                    attributes: {
                        exclude: ["patient_id", "doctor_id"]
                    }
                }
            }
        )

        return res.json(
        {
            succes: true,
            message: 'Doctors Info and Appointment',
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