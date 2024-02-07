const express = require('express');
const postteam = require('../controllers/team');
const getTeam = require('../controllers/team');
const teamRoute = express.Router()
teamRoute.route("/").post(postteam).get(getTeam)

module.exports = teamRoute