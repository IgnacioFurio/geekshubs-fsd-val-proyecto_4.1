const { Patient} = require('../models');

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
        console.log(userId);
        const patientInfo = await Patient.findAll(
            {
                where: 
                    {
                        user_id: userId
                    }
            }
        );
            console.log(patientInfo);
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
patientController.getPatientAppointment = (req,res) => {return res.send('Póximas citas')};


module.exports = patientController;