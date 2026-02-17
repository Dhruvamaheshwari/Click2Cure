const experss = require('express')
const route = experss.Router()

const alldoctor = require('../controller/allDoctorAndPatient')

route.get("/alldoctor" , alldoctor);

module.exports = route;