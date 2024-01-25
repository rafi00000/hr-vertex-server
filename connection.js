const mongoose = require("mongoose")
require('dotenv').config()
const connectDb = async () => {
    try {
        await mongoose.connect(`mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASSWORD}@hrvertex.rr1tlxn.mongodb.net/?retryWrites=true&w=majority`)
        console.log("db is connected")
    }
    catch (error) {
        return console.log("trouble while connecting", error)
    }
}

module.exports = connectDb;