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
        type: String,
        required: true
    },
    clockIn: {
        type: Date,
        default: Date.now()
    },
    clockOut: {
        type: Date,
        default: Date.now()
    }
});

const attendanceModel = mongoose.model("attendance", attendanceSchema);

module.exports = attendanceModel;