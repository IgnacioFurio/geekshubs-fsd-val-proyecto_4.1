const appointmentController = {};

appointmentController.getTodayAppointment = (req,res) => async (req, res) => {
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


appointmentController.createAppointment = async (req, res) => {
  try {
    const { date_time, patient_id, doctor_id } = req.body;

    // Creamos una nueva cita
    const newAppointment = await Appointment.create({
      date_time: date_time,
      patient_id: patient_id,
      doctor_id: doctor_id,
    });

    return res.json(newAppointment);
  } catch (error) {
    return res.status(500).send(error.message);
  }
};

appointmentController.updateAppointment = async (req, res) => {
  try {
    const { id, date_time, patient_id, doctor_id } = req.body;

    // Buscamos la cita a actualizar por su id
    const appointment = await Appointment.findByPk(id);

    // Actualizamos los datos de la cita
    appointment.date_time = date_time;
    appointment.patient_id = patient_id;
    appointment.doctor_id = doctor_id;

    // Guardamos los cambios en la base de datos
    await appointment.save();

    return res.send('Appointment updated');
  } catch (error) {
    return res.status(500).send(error.message);
  }
};

appointmentController.deleteAppointment = async (req, res) => {
  try {
    const { id } = req.body;

    // Buscamos la cita a eliminar por su id
    const appointment = await Appointment.findByPk(id);

    // Eliminamos la cita de la base de datos
    await appointment.destroy();

    return res.send('Appointment deleted');
  } catch (error) {
    return res.status(500).send(error.message);
  }
};

module.exports = appointmentController;
