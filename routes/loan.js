const express = require('express');
const LoanPost = require('../controllers/loan');
const LoanGet = require('../controllers/loan');
const loanRoutes = express.Router()
loanRoutes.route("/").post(LoanPost).get(LoanGet)

module.exports = loanRoutes