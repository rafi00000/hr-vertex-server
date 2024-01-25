const mongoose = require("mongoose")
const connectDb = async () => {
    try {
        await mongoose.connect("mongodb+srv://hrVertexserver:hrvertexserver7712@cluster0.mn7153h.mongodb.net/?retryWrites=true&w=majority")
        console.log("db is connected")
    }
    catch (error) {
        return console.log("trouble while connecting", error)
    }
}

module.exports = connectDb;