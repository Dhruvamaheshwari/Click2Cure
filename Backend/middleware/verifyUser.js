


const VerifyJWTToken = require('../services/VerifyJWTToken')

const verifyUser = (req , res , next) =>
{
    // to fetch the token for the cookies
    const token = req.cookies.access_token;
    if(!token)
    {
        req.user = null;
        return next();
    }

    try {
        const decodedToken = VerifyJWTToken(token)
        req.user = decodedToken
    } catch (error) {
        req.user = null;
    }
    return next()
}


module.exports = verifyUser