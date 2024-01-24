const mongoose = require("mongoose");
var bcrypt = require('bcryptjs');


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
    password: {
        type: String,
        required: true,
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

userSchema.pre("save", async function(next){
    const user = this;

    if(!user.isModified("password")){
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