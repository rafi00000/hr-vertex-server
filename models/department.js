const { default: mongoose } = require("mongoose");


const departmentSchema = mongoose.Schema({
    dept_name: {
        type: String,
        required: true
    },
    dept_head: {
        type: String,
        required: true
    },
    total_emp: {
        type: Number,
        required: true
    }
})

const departmentModel = mongoose.model("department", departmentSchema);

module.exports = departmentModel;