/** @format */

const { connect } = require("mongoose");


require("dotenv").config();
const dbconnect = () => {
    connect(process.env.MONGO_URL)
        .then(() => console.log("db is connect successfully"))
        .catch((err) => console.log(err.message));
};


module.exports = dbconnect
