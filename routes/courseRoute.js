const express = require("express");
const router = express.Router();
const {
    createCourse,
    getAllCourses,
    getCourse,
    updateCourse,
    deleteCourse
} = require("../controllers/courseController");

router.post("/", createCourse).get("/", getAllCourses);
router.put("/:id", updateCourse).get("/:id", getCourse).delete("/:id", deleteCourse);

module.exports = router;
