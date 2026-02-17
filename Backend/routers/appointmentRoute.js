/** @format */

const express = require("express");
const router = express.Router();
const { post_appointement , get_appointement} = require("../controller/appoinmentController");

router.post("/appointment", post_appointement);
router.get("/appointment_get", get_appointement);

module.exports = router;
