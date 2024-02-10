const mongoose = require("mongoose");
var bcrypt = require('bcryptjs');

const userSchema = new mongoose.Schema({
    FirstName: {
        type: String,
        required: true,
    },
    LastName: {
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
    Company: {
        type: String,
        required: true
    },
    Phone: {
        type: Number,
        required: true
    },
    ClientId: {
        type: String,
        required: true
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

const userModel = mongoose.model("client", userSchema);
module.exports = userModel;