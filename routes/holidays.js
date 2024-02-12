const express = require('express');
const {PostHoliday,GetHoliday} = require('../controllers/holidays')

const holidayroutes = express.Router()
holidayroutes.route("/").post(PostHoliday).get(GetHoliday)

module.exports = holidayroutes