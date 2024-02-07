const mongoose = require("mongoose");
var bcrypt = require('bcryptjs');


const userSchema = new mongoose.Schema({
    FullName: {
        type: String,
        required: true,
    },
    photo: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: true,
    },
    Gender: {
        type: String,
        required: true
    },
    Designation: {
        type: String,
        required: true
    },
    Address: {
        type: String,
        required: true
    },
    Salary: {
        type: Number,
        required: true
    },
    PhoneNumber: {
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
    },
    JoiningDate: {
        type: Date,
        required: true
    },
    role: {
        type: String,
        default: "employee",
    },
    team: {
        type: String,
        default: "none",
    }
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