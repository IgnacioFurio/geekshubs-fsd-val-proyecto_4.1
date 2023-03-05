const { Appointment, Patient, Doctor, User }  = require('../models');

const appointmentController = {};

appointmentController.createAppointment = async (req,res) => {
  try {

    const { date_time, patient_id, doctor_id } = req.body;
  
    if(date_time === "" || patient_id === "" || doctor_id  === ""){
      return res.status(502).json(
        {
          succes: false,
          message: 'Empty field',
        }
      );
    };

    const appointment = await Appointment.create(
      {
        date_time: date_time,
        patient_id: patient_id,
        doctor_id: doctor_id,
      }
    );

  
    return res.json(
      {
        success: true,
        message: 'Appointment created successfully',
        data: appointment,
      }
    );
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
appointmentController.getAppointment = async (req,res) => {
  
  try {

    const userId = req.userId;

    const appointment = await Appointment.findByPk(
      userId,
      {
        include: 
        {
          model: Patient,
          attributes: 
          {
            exclude: ["id", "user_id"]
          }
        },
        attributes: 
        {
          exclude: ["patient_id", "doctor_id"]
        }      
      }
    );

    if (!appointment) {
      return res.status(503).json({ message: 'Appointment not found.' });
    }

    return res.json(
      {
        succes: true,
        message: 'Appointment found.',
        data: appointment,
      }
    );
  } catch (error) {
    console.error(error);
    return res.status(500).json({ message: 'Something went wrong.' });
  };
};
appointmentController.updateAppointment = async(req,res) => {
  try {
    const appointmentId = req.params.id;
    const { date_time } = req.body;

    const appointment = await Appointment.findOne({ where: { id: appointmentId } });
    if (!appointment) {
      return res.status(404).json({ message: 'Appointment not found' });
    }

    // Actualizar la cita con los nuevos valores
    appointment.date_time = date_time || appointment.date_time;
   

    await appointment.save();

    return res.json({
      success: true,
      message: 'Appointment updated successfully',
      data: appointment,
    });
  } catch (error) {
    console.error(error);
    return res.status(500).json({ message: 'Internal server error' });
  }
};


appointmentController.deleteAppointment = async(req,res) => {
  try {
    const appointment = await Appointment.findByPk(req.params.id);
    if (!appointment) {
      return res.status(404).json({ message: 'Appointment not found' });
    }

    const userId = req.userId;
    if (appointment.user_id !== userId) {
      return res.status(403).json({ message: 'Forbidden. Appointment does not belong to user.' });
    }

    await appointment.destroy();

    return res.json({ message: 'Appointment deleted successfully' });
  } catch (error) {
    console.error(error);
    return res.status(500).json({ message: 'Internal server error' });
  }
};  




module.exports = appointmentController;
