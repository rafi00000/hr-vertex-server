const express = require("express");
const router = express.Router();
const { postRecruitment, getAllRecruitment } = require("../controllers/recruitmentController");

router.post("/", postRecruitment).get("/", getAllRecruitment)

module.exports = router;
