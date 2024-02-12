const express = require('express');
const  {LoanGet,LoanPost}= require('../controllers/loan');
const loanRoutes = express.Router()
loanRoutes.route("/").post(LoanPost).get(LoanGet)

module.exports = loanRoutes