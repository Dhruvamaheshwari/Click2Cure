/** @format */

// to import the Schema
const { Schema, model } = require("mongoose");

// to create the patient Schema

const PatientSchema = new Schema({
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  password: {
    type: String,
    required: true,
  },
  role: {
    type: String,
    enum: ["patient", "doctor"],
    default: "patient",
  },
  department: {
    type: String,
    required: false,
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

// to create the model
const PatientModel = model("Patient", PatientSchema);

// to export the model
module.exports = PatientModel;
