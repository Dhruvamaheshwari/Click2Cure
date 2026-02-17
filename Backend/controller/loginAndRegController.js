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

    const login_data = await login_services(email, password);
    res.json({ succ: true, data: login_data, mess: "login Successfully" });
  } catch (err) {
    res.json({ succ: false, mess: err.message });
  }
};

module.exports = { RegController, loginControll };
