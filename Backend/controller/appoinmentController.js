/** @format */

const AppointmentModel = require("../model/appointmentModel");

const post_appointement = async (req, res) => {
  try {
    const { doctorId, date, time, patientId } = req.body;

    const newAppointment = new AppointmentModel({
      doctorId,
      date,
      time,
      patientId,
    });

    await newAppointment.save();
    res.json({ succ: true, mess: "Appointment booked successfully!" });
  } catch (error) {
    res.status(500).json({ succ: false, mess: error.message });
  }
};

const get_appointement = async (req, res) => {
  try {
    const { patientId } = req.query; // we'll pass patientId as a query parameter

    // console.log(patientId)
    const appointmentData = await AppointmentModel.find({ patientId })
      .populate("doctorId", "name email")
      .populate("patientId", "name email");

    return res.json({ succ: true, mess: appointmentData });
  } catch (error) {
    res.status(500).json({ succ: false, mess: error.message });
  }
};

const show_doctor_appointement = async (req, res) => {
  try {
    const { doctorId } = req.query;
    const doctor_appointement = await AppointmentModel.find({
      doctorId,
    }).populate("patientId", "name email");
    return res.json({ succ: true, mess: doctor_appointement });
  } catch (error) {
    res.status(500).json({ succ: false, mess: error.message });
  }
};

const update_appointment_status = async (req, res) => {
  try {
    const { appointmentId, status } = req.body;
    const updatedAppointment = await AppointmentModel.findByIdAndUpdate( appointmentId,
      { status },
      { new: true },
    );
    res.json({
      succ: true,
      mess: "Status updated successfully!",
      data: updatedAppointment,
    });
  } catch (error) {
    res.status(500).json({ succ: false, mess: error.message });
  }
};

module.exports = {
  post_appointement,
  get_appointement,
  show_doctor_appointement,
  update_appointment_status,
};
