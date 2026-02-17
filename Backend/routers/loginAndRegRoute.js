/** @format */

const express = require("express");
const route = express.Router();

// to import the RegController from the Controller
const {
  RegController,
  loginControll,
} = require("../controller/loginAndRegController");

route.post("/user_post", RegController);
route.post("/user_get", loginControll);

// to export the route;
module.exports = route;
