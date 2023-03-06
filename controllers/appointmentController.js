const { Appointment, Patient }  = require('../models');

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
appointmentController.getUserAppointment = async (req,res) => {
  
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
appointmentController.getAllAppointment = async (req,res) => {
  
  try {

    const appointment = await Appointment.findAll(
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
      return res.status(503).json({ message: 'Not existing appointments.' });
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

    const { appointmentId, newDate } = req.body;

    if( appointmentId === "" || newDate === ""){
      return res.status(502).json(
        {
          succes: false,
          message: 'Empty field.'
        }
      );
    };

    const updateAppointment = await Appointment.update(
      {
        date_time: newDate
      },
      { 
        where: { id: appointmentId } 
      }
    );

    return res.json(
      {
        success: true,
        message: 'Appointment updated successfully',
        data: updateAppointment
      }
    );
  } catch (error) {
    return res.status(500).json(
      { 
        succes: false,
        message: 'Something went wrong' ,
        error: error.message
      }
    );
  }
};
appointmentController.deleteAppointment = async(req,res) => {
  try {

    const { appointmentId } = req.body

    if(appointmentId === ""){
      return res.status(502).json(
        {
          succes: false,
          message: 'Empty field.'
        }
      );
    };

    const cancelAppointment = await Appointment.destroy(
      {
        where: 
        {
          id: appointmentId
        }
      }
    );

    return res.json(
      { 
        succes: true,
        message: 'Appointment deleted successfully',
        data: cancelAppointment 
      }
    );
  } catch (error) {
    console.error(error);
    return res.status(500).json(
      { 
        succes: false,
        message: 'Something went wrong',
        error: error.message 
      }
    );
  }
};  

module.exports = appointmentController;