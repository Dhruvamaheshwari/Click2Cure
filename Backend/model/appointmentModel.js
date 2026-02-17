/** @format */

// to import the Schema
const { Schema, model, default: mongoose } = require("mongoose");

// to create the Appointment Schema
const AppointmentSchema = new Schema({
  doctorId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Patient", // since doctors are in PatientModel
    required: true,
  },
  patientId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Patient",
    required: false, // will populate if user is logged in
  },
  date: {
    type: String,
    required: true,
  },
  time: {
    type: String,
    required: true,
  },
  status: {
    type: String,
    enum: ["pending", "reject", "approved"],
    default: "pending",
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

// to create the model
const AppointmentModel = model("Appointment", AppointmentSchema);

// to export the model
module.exports = AppointmentModel;
