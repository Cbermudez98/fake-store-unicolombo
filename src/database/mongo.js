const mongo = require("mongoose");

const connect = async (uri) => {
    try {
        await mongo.connect(uri);
        console.log("Connected with success");       
    } catch (error) {
        console.log("Error not connected", error.message);
        throw error;
    }
};

module.exports = connect;