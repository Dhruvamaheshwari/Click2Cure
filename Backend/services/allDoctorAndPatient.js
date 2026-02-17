// to import the Schema

const PatientModel = require('../model/patientModel')


// to get all the doctors;
const All_Doctor = async() =>{
    const DoctorData = await PatientModel.find({role:"doctor"});
    return DoctorData
}

module.exports = {All_Doctor}