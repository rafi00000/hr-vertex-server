const express = require('express');
const { handleGetAttendance, handleAttendancePost, handleUpdateAttendance } = require("../controllers/attendance");

const attendanceRouter = express.Router();

attendanceRouter.route("/").get(handleGetAttendance).post(handleAttendancePost)
attendanceRouter.route("/:id").patch(handleUpdateAttendance)

module.exports = attendanceRouter;