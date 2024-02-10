const express = require('express');
const {postteam,getTeam, updateTeam} = require('../controllers/team');
// const getTeam = require('../controllers/team');
const teamRoute = express.Router()
teamRoute.route("/").post(postteam).get(getTeam).patch(updateTeam)
module.exports = teamRoute