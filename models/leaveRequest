const mongoose = require("mongoose");
var bcrypt = require('bcryptjs');


const userSchema = new mongoose.Schema({
        Name: {
            type: String,
            required: true,
        },
        email: {
            type: String,
            required: true,

        },
        FormDate: {
            type: Date,
            required: true,
        },
        ToDate: {
            type: Date,
            required: true,
        },
        LeaveType: {
            type: String,
            required: true
        },
        Reason: {
            type: String,
            required: true
        },
        Status: {
            type: String,
            required: true,
            default: "None",
        },


    }, { timestamps: true });

// userSchema.pre("save", async function (next) {
//     const user = this;

//     if (!user.isModified("password")) {
//         next();
//     }

//     try {
//         const saltRound = await bcrypt.genSalt(10);
//         const hash_pass = await bcrypt.hash(user.password, saltRound);
//         user.password = hash_pass;
//     } catch (error) {
//         next(error)
//     }
// })

const userModel = mongoose.model("Leave", userSchema);
module.exports = userModel;