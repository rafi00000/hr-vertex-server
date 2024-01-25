const mongoose = require('mongoose');

const recruitmentSchema = new mongoose.Schema({
    position: String,
    department: String,
    responsibilities: String,
    requirements: String,
    applicationDeadline: Date,
}, {timestamps: true, id: true});

const Recruitment = mongoose.model('Recruitment', recruitmentSchema);

module.exports = Recruitment;
