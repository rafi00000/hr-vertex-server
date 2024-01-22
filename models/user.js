const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    email:{
        type: String,
        required: true,
        unique: true
    },
    gender: {
        type: String,
        required: true
    },
    salary: {
        type: Number,
        required: true
    }, 
    leaves: {
        type: Number,
        default: 21
    },
    loan: {
        type: Number,
        default: 0
    }
}, {timestamps: true});

const userModel = mongoose.model("user", userSchema);
module.exports = userModel;