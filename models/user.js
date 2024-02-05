const mongoose = require("mongoose");
var bcrypt = require('bcryptjs');

const userSchema = new mongoose.Schema({
    FullName: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        required: true,
      
    },
    password: {
        type: String,
        required: true,
    },
    Gender: {
        type: String,
        required: true
    },
    Salary: {
        type: String,
        required: true
    },
    Address: {
        type: String,
        required: true
    },
    Designation: {
        type: String,
        required: true
    },
    JoiningDate: {
        type: Date,
        required: true
    },
    PhoneNumber: {
        type: Number,
        required: true
    },
    photo: {
        type: String,
        required: true
    },
    role: {
        type: String,
        required: true
    },
    leaves: {
        type: Number,
        default: 21
    },
    loan: {
        type: Number,
        default: 0
    },






}, { timestamps: true });

userSchema.pre("save", async function (next) {
    const user = this;

    if (!user.isModified("password")) {
        next();
    }

    try {
        const saltRound = await bcrypt.genSalt(10);
        const hash_pass = await bcrypt.hash(user.password, saltRound);
        user.password = hash_pass;
    } catch (error) {
        next(error)
    }
})

const userModel = mongoose.model("user", userSchema);
module.exports = userModel;