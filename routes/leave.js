const express = require('express');
const { LeavePost, leaveGet } = require('../controllers/leave');
const leaveRoutes = express.Router()
leaveRoutes.route("/").post(LeavePost).get(leaveGet)

module.exports = leaveRoutes