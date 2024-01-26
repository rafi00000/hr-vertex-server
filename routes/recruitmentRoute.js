const express = require("express");
const router = express.Router();
const { postRecruitment, getAllRecruitment, updateRecruitment } = require("../controllers/recruitmentController");

router.post("/", postRecruitment).get("/", getAllRecruitment)
router.put("/:id", updateRecruitment)

module.exports = router;
