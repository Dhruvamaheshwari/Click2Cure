/** @format */

const express = require("express");
const route = express.Router();

// to import the RegController from the Controller
const {
  RegController,
  loginControll,
  checkAuth,
  logout,
} = require("../controller/loginAndRegController");
const verifyUser = require("../middleware/verifyUser");

route.post("/user_post", RegController);
route.post("/user_get", loginControll);
route.get("/check_auth", verifyUser, checkAuth);
route.get("/logout", logout);

// to export the route;
module.exports = route;
