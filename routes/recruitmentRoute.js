const express = require("express");
const router = express.Router();
const { postRecruitment } = require("../controllers/recruitmentController");

router.post("/", postRecruitment);

module.exports = router;
