const express = require('express');
const router = express.Router();
const recruitmentController = require('../controllers/recruitmentController');

router.post('/recruitment', recruitmentController.postRecruitment);

module.exports = router;
