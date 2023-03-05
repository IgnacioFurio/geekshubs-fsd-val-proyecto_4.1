const appointmentController = {};
const { Appointment, Patient, Doctor, User }  = require('../models');


// appointmentController.getTodayAppointment = async (req, res) => {
    //     try {
        //       // Obtenemos la fecha actual en formato YYYY-MM-DD
        //       const today = new Date().toISOString().slice(0, 10);  
//       // Buscamos todas las citas de la fecha actual
//       const appointments = await Appointment.findAll({
//         where: {
//           date_time: today,
//         },
//         include: [
//           // Incluimos información del paciente y doctor de cada cita
//           {
//             model: Patient,
//             attributes: ['name', 'surname', 'DNI', 'phone_number', 'post_code'],
//           },
//           {
//             model: Doctor,
//             attributes: ['collegiate_member'],
//             include: [
//               {
//                 model: User,
//                 attributes: ['name'],
//               },
//             ],
//           },
//         ],
//       });  
//       return res.json(appointments);
//     } catch (error) {
//       return res.status(500).send(error.message);
//     }
// };

appointmentController.createAppointment = async (req,res) => {
    try {
   // Extraer los datos de la solicitud
   const { date_time, patientId } = req.body;
   

   // Crear la cita en la base de datos
   const appointment = await Appointment.create(
       {
     date_time,
     patient_id: patientId,
     doctor_id: req.doctor_id,
   })

   // Devolver una respuesta con los detalles de la cita creada
   return res.status(201).json({
     success: true,
     message: 'Appointment created successfully',
     data: appointment,
   });
 } catch (error) {
   console.error(error);
   return res.status(500).json({ message: 'Internal server error' });
 }}



appointmentController.getAppointment = async (req,res) => {
  try {
    const appointment = await Appointment.findByPk(req.params.id);
    if (!appointment) {
      return res.status(404).json({ message: 'Appointment not found' });
    }

    const userId = req.userId;
    if (appointment.user_id !== userId) {
      return res.status(403).json({ message: 'Forbidden. Appointment does not belong to user.' });
    }

    return res.json({
      message: 'Appointment found',
      appointment: appointment,
      belongsToUser: true
    });
  } catch (error) {
    console.error(error);
    return res.status(500).json({ message: 'Internal server error' });
  }
};
appointmentController.updateAppointment = (req,res) => {return res.send('Cita cambiada')};
appointmentController.deleteAppointment = (req,res) => {return res.send('Cita eliminada')};

module.exports = appointmentController;
