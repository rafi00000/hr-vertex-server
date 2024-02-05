const express = require('express');
const {  handleApplicationPost, handleGetApplications, handleGetOneApplication } = require('../controllers/application');
const applicationRouter = express.Router()

applicationRouter.route("/").get(handleGetApplications).post(handleApplicationPost)
applicationRouter.route("/:id").get(handleGetOneApplication).delete()



module.exports =  applicationRouter;