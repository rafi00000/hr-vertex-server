const { default: mongoose } = require('mongoose');

const applicationSchema = mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
    unique: true
  },
  phone: {
    type: Number,
    required: true,
  },
  address: {
    type: String,
    default: 'Null',
  },
  education: {
    type: String,
    required: true,
  },
  experience: {
    type: Number,
    required: true,
    default: 0,
  },
  resume: {
    type: String,
    required: true,
  }
});

const applicationModel = mongoose.model('application', applicationSchema);
module.exports = applicationModel;