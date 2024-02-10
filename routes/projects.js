const express = require('express');
const addProjects = require('../controllers/Project')
const findProject = require('../controllers/Project');
const projectRoute = express.Router()
projectRoute.route("/").post(addProjects).get(findProject)

module.exports = projectRoute