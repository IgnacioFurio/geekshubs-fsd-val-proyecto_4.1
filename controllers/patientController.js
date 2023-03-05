const { pathToFileURL } = require('url');
const { Patient, Appointment, Doctor} = require('../models');

const patientController = {};

patientController.createPatient = async (req,res) => {
    try {
        const {name, surname, DNI, phone_number, post_code, birth, allergy, surgery, user_id} = req.body;

        const newPatient = {
            name: name,
            surname: surname,
            DNI: DNI,
            phone_number: phone_number,
            post_code: post_code,
            birth: birth,
            allergy: allergy,
            surgery: surgery,
            user_id: user_id
        };

        const patient = await Patient.create(newPatient)

        return res.json(
            {
                succes: true,
                message: 'New Patient file created',
                data: patient
            }
        );
    } catch (error) {
        return res.status(500).json(
            {
                succes: true,
                message: "Something went wrong",
                error: error.message
            })
        }
};

patientController.getPatientInfo = async (req,res) => {
    try {
        const userId = req.userId;
        const patientInfo = await Patient.findAll(
            {
                where: 
                    {
                        user_id: userId
                    }
            }
        );

        return res.json(
            {
                succes: true,
                message: 'Patient information',
                data: patientInfo
            }
        )
    } catch (error) {
        return res.status(500).send(error.message)
    }
};
patientController.getPatientAppointment = async (req,res) => {
    
    try {
        const patientId = req.userId

        const patientAppointment = await Patient.findAll(
            {
                where: 
                {
                    user_id: patientId
                },
                include: {
                    model: Appointment,
                    attributes: 
                    {
                        exclude: ["patient_id", "doctor_id"]
                    },
                    include: 
                    {
                        model: Doctor,
                        attributes: 
                        {
                            exclude: ["DNI", "phone_number", "contract_at", "contract_until", "user_id", "createdAt", "updatedAt"]
                        }
                    }
                }
            }
        )

        return res.json({
            succes: true,
            message:'Póximas citas',
            data: patientAppointment
        })
    } catch (error) {
        
    }
    
};


module.exports = patientController;