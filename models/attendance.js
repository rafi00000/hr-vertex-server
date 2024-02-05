const { default: mongoose } = require("mongoose");


const attendanceSchema = mongoose.Schema({
    emp_id: {
        type: String,
        required: true
    } ,
    name: {
        type: String,
        required: true
    },
    department: {
        type: String
    },
    clockIn: {
        type: Date,
    },
    clockOut: {
        type: Date
    }
});

const attendanceModel = mongoose.model("attendance", attendanceSchema)