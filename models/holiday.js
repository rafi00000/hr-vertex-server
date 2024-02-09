const { Schema, model } = require("mongoose");

const holidaySchema = new Schema({
    'total':{
        type : String,
        required: true,
    },
    'holiday':{
        type : String,
        required: true,
    },
    'date':{
        type : Date,
        required: true,
        default: Date.now()
    },
})
const holidays = model('holiday', holidaySchema)
module.exports = holidays;