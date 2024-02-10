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
        default: "null",
        required: true
    },
    date: {
        type: String,
    },
    month: String,
    clockIn: {
        type: Date,
        default: () =>{
            let local = new Date();
            let offset = local.getTimezoneOffset();
            let utc = new Date(local.getTime() - offset * 60000);
            return utc;
        }
    },
    clockOut: {
        type: Date,
        default: () =>{
            let local = new Date();
            let offset = local.getTimezoneOffset();
            let utc = new Date(local.getTime() - offset * 60000);
            return utc;
        }
    }
});

const attendanceModel = mongoose.model("attendance", attendanceSchema);

module.exports = attendanceModel;