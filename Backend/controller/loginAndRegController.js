/** @format */

// to import the reg_services and login_servicesfrom the services;
const { reg_services, login_services } = require("../services/loginServices");

//  this is the Reg. function
const RegController = async (req, res) => {
  try {
    const { name, email, password, role, department } = req.body;

    if (!name || !email || !password || !role)
      return res.json({ succ: false, mess: "fill all the fild" });

    if (role === "doctor" && !department)
      return res.json({ succ: false, mess: "Doctor must select a department" });

    const reg_data = await reg_services(
      name,
      email,
      password,
      role,
      department,
    );
    res.json({ succ: true, mess: reg_data });
  } catch (err) {
    res.json({ succ: false, mess: err.message });
  }
};

// this is the login function
const loginControll = async (req, res) => {
  try {
    const { email, password } = req.body;
    // console.log(email , password);

    if (!email || !password)
      return res.json({ succ: false, mess: "fill all the fild" });

    // to create the token

    const login_data = await login_services(email, password);

    res.cookie("access_token", login_data.token);
    // console.log(login_data.token)
    res.json({ succ: true, data: login_data.data, mess: "login Successfully" });
  } catch (err) {
    res.json({ succ: false, mess: err.message });
  }
};

// this is the check auth function
const checkAuth = (req, res) => {
  if (req.user) {
    return res.json({ succ: true, data: req.user, mess: "Authenticated" });
  } else {
    return res.json({ succ: false, mess: "Not Authenticated" });
  }
};

// this is the logout function
const logout = (req, res) => {
  res.clearCookie("access_token");
  return res.json({ succ: true, mess: "Logged out successfully" });
};

module.exports = { RegController, loginControll, checkAuth, logout };
