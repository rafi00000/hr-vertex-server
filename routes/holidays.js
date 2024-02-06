const express = require('express');
const {getHoliday, postHoliday} = require('../controllers/holidays')

const holidayRoutes = express.Router()
holidayRoutes.route("/").get(getHoliday).post(postHoliday);

module.exports = holidayRoutes;