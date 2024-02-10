const express = require("express");
const router = express.Router();
const { postRecruitment, getAllRecruitment, updateRecruitment, getSingleRecruitment, deleteRecruitment } = require("../controllers/recruitmentController");

router.put("/:id", updateRecruitment).get("/:id", getSingleRecruitment).delete("/:id", deleteRecruitment)
router.post("/", postRecruitment).get("/", getAllRecruitment)
router.delete("/:id", deleteRecruitment)

module.exports = router;
