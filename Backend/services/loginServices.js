
// to import the patient schema
const PatientModel = require('../model/patientModel')

const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')

require('dotenv').config()

// to create the entry in the database
const reg_services = async (name, email, password, role, department) => {

    // hash the password
    const salt = await bcrypt.genSalt(10);
    const hashPassword = await bcrypt.hash(password, salt)

    const reg_data = await PatientModel.create({ name, email, password: hashPassword, role, department })

    return reg_data;
}

// to find the data in the database
const login_services = async (email, password) => {

    const login_data = await PatientModel.findOne({ email: email })


    const ismatch = await bcrypt.compare(password, login_data.password)

    // to generate the token
    if (ismatch) {
        const payload = {
            id: login_data._id,
            name: login_data.name,
            email: login_data.email,
            role: login_data.role,
            department: login_data.department,
        }

        const token = jwt.sign(payload, process.env.JWT_TOKNE_VALUE, { expiresIn: "1d" })
        return {
            data: {
                id: login_data._id,
                name: login_data.name,
                email: login_data.email,
                role: login_data.role,
                department: login_data.department,
            }, token
        };
    }else{
        throw new Error
    }
}
module.exports = { reg_services, login_services }