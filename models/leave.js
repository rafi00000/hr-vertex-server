const { Schema, model } = require("mongoose");

const leaveSchema = new Schema({
    'FormDate':{
        type : Date,
        required: true,
    },
    'ToDate':{
        type : Date,
        required: true,
    },
    'user':{
        type :Schema.Types.ObjectId,
        ref: 'user'
    },
    'LeaveType':{
        type :String,
        required: true,
    },
    'Reason':{
        type :String,
        required: true,
    },
})
const leave = model('leave',leaveSchema)
module.exports = leave