const express = require('express');
const GetHoliday = require('../controllers/holidays')
const PostHoliday = require('../controllers/holidays')

const holidayroutes = express.Router()
holidayroutes.route("/").post(PostHoliday).get(GetHoliday)

module.exports = holidayroutes