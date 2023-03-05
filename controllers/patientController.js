const { pathToFileURL } = require('url');
const { User, Patient, Appointment, Doctor} = require('../models');

const patientController = {};

patientController.createPatient = async (req,res) => {
    try {
        const {name, surname, DNI, phone_number, post_code, birth, allergy, surgery} = req.body;

        const userId = req.userId

        if(name === "" || surname === "" || DNI === "" || phone_number === "" || post_code === "" || birth === ""){
            return res.status(502).json(
                {
                    succes: false,
                    message: "Empty field"
                }
            );
        };

        const newPatient = {
            name: name,
            surname: surname,
            DNI: DNI,
            phone_number: phone_number,
            post_code: post_code,
            birth: birth,
            allergy: allergy,
            surgery: surgery,
            user_id: userId
        };

        const patient = await Patient.create(newPatient);

        return res.json(
            {
                succes: true,
                message: 'New Patient file created.',
                data: patient
            }
        );
    } catch (error) {
        return res.status(500).json(
                {
                    succes: true,
                    message: "Something went wrong.",
                    error: error.message
                }
            );
        };
};
patientController.getPatientInfo = async (req,res) => {

    try {
        const userId = req.userId;

        const patientInfo = await User.findAll(
            {
                where: 
                    {
                        id: userId
                    },
                attributes: 
                    {
                    exclude: ["id", "password","role_id"]
                    },
                include: 
                    {
                    model: Patient,
                    attributes: 
                        {
                        exclude: ["id", "user_id"]
                        }
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
        return res.status(500).json(
            {
                succes: false,
                message: 'Something went wrong.',
                error: error.message
            }
        );
    };
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
                        exclude: ["patient_id", "user_id", "doctor_id"]
                    },
                    include: 
                    {
                        model: Doctor,
                        attributes: 
                        {
                            exclude: ["id","DNI", "phone_number", "contract_at", "contract_until", "user_id", "createdAt", "updatedAt"]
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
        return res.status(500).json(
            {
                succes: false,
                message: 'Something went wrong.',
                error: error.message
            }
        );
    }
    
};


module.exports = patientController;