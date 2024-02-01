const express = require('express');
const {  handleApplicationPost, handleGetApplications } = require('../controllers/application');
const applicationRouter = express.Router()

applicationRouter.route("/").get(handleGetApplications).post(handleApplicationPost)
applicationRouter.route("/:id")



module.exports =  applicationRouter;