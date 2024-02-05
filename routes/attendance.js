const { Router } = require("express");
const { handleGetAttendance, handleAttendancePost } = require("../controllers/attendance");

const attendanceRouter = Router();

attendanceRouter.route("/").get(handleGetAttendance).post(handleAttendancePost)