
const jwt = require('jsonwebtoken')
require('dotenv').config()

const VerifyJWTToken = (token) =>{

    // to verify the token
    return jwt.verify(token , process.env.JWT_TOKNE_VALUE)
}

module.exports = VerifyJWTToken