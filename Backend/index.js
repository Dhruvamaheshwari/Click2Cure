/** @format */

const express = require("express");
const app = express();

// use the cors to connect the backend and forntend
const cors = require("cors");
const cookieParser = require("cookie-parser");
app.use(
  cors({
    origin: "http://localhost:5173",
    credentials: true,
  }),
);

require('dotenv').config();

app.use(cookieParser());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// to import the dbconnect file from the config
const dbconnect = require("./config/dbconnect");
dbconnect();

// to import the login rotue;
const loginAndRegRout = require("./routers/loginAndRegRoute");
app.use(loginAndRegRout);

// to import the doctor and patient data route
const alldoctorRoute = require("./routers/AllDoctorAndPatientRout");
app.use(alldoctorRoute);

// to import the appointment route
const appointmentRoute = require("./routers/appointmentRoute");
app.use(appointmentRoute);

// demo rotue
app.get("/", (req, res) => {
  res.send("Hello jee kya hall chaal");
});

app.listen(process.env.PORT, () => console.log("server is started at port 4000"));
