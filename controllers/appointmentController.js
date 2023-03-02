const appointmentController = {};

appointmentController.getTodayAppointment = (req,res) => {return res.send('Las citas del día')};
appointmentController.createAppointment = (req,res) => {return res.send('Cita creada')};
appointmentController.updateAppointment = (req,res) => {return res.send('Cita cambiada')};
appointmentController.deleteAppointment =  (req,res) => {return res.send('Cita eliminada')};

module.exports = appointmentController;