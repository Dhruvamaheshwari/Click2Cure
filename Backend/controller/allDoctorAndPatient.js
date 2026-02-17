
// to import the allDoctor function from the service folder;
const {All_Doctor} = require('../services/allDoctorAndPatient')

const alldoctor = async(req , res) =>{
    try {
        const doctorData = await All_Doctor();
        res.json({succ:true , mess:doctorData})
        // console.log(doctorData)
    } catch (error) {
        res.json({succ:false , mess:error.message})
    }
}

module.exports = alldoctor