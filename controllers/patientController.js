const patientController = {};

patientController.createPatient = (req,res) => {return res.send('create patient information')};
patientController.getPatientInfo = (req,res) => {return res.send('get patient information')};
patientController.getPatientAppointment = (req,res) => {return res.send('Póximas citas')};


module.exports = patientController;