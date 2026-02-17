
// to import the patient schema
const PatientModel = require('../model/patientModel')

// to create the entry in the database
const reg_services = async(name, email, password, role , department) =>{
    const reg_data = await PatientModel.create({name, email, password, role , department})

    return reg_data;
}

// to find the data in the database
const login_services = async(email , password) =>{
    const login_data = await PatientModel.findOne({email:email  , password:password})
    if(login_data)
        return login_data
    else
        throw Error("Pls Reg. first")
}
module.exports = {reg_services , login_services}