/** @format */

const express = require("express");
const router = express.Router();
const {
  post_appointement,
  get_appointement,
  show_doctor_appointement,
  update_appointment_status,
} = require("../controller/appoinmentController");

router.post("/appointment", post_appointement);
router.get("/appointment_get", get_appointement);
router.get("/show_doctor_appointement_get", show_doctor_appointement);
router.patch("/update_status", update_appointment_status);

module.exports = router;
