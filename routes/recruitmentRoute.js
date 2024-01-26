const express = require("express");
const router = express.Router();
const { postRecruitment, getAllRecruitment, updateRecruitment, deleteRecruitment } = require("../controllers/recruitmentController");

router.post("/", postRecruitment).get("/", getAllRecruitment)
router.put("/:id", updateRecruitment)
router.delete("/:id", deleteRecruitment)

module.exports = router;
