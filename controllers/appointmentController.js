const appointmentController = {};

appointmentController.getTodayAppointment = async (req, res) => {
    try {
      // Obtenemos la fecha actual en formato YYYY-MM-DD
      const today = new Date().toISOString().slice(0, 10);
  
      // Buscamos todas las citas de la fecha actual
      const appointments = await Appointment.findAll({
        where: {
          date_time: today,
        },
        include: [
          // Incluimos información del paciente y doctor de cada cita
          {
            model: Patient,
            attributes: ['name', 'surname', 'DNI', 'phone_number', 'post_code'],
          },
          {
            model: Doctor,
            attributes: ['collegiate_member'],
            include: [
              {
                model: User,
                attributes: ['name'],
              },
            ],
          },
        ],
      });
  
      return res.json(appointments);
    } catch (error) {
      return res.status(500).send(error.message);
    }
};
appointmentController.createAppointment = (req,res) => {return res.send('Cita creada')};
appointmentController.updateAppointment = (req,res) => {return res.send('Cita cambiada')};
appointmentController.deleteAppointment =  (req,res) => {return res.send('Cita eliminada')};

module.exports = appointmentController;
