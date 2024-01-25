const mongoose = require("mongoose")
const connectDb = async () => {
    try {
        await mongoose.connect("mongodb://localhost:27017/hrVertex")
        console.log("db is connected")
    }
    catch (error) {
        return console.log("trouble while connecting", error)
    }
}

module.exports = connectDb;