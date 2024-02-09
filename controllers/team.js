const team = require("../models/team");

const postteam = async (req, res) => {
    const data = req.body;
    const result = await team.create(data)
    res.send({ success: true, msg: "Posted Successfully" })
}
module.exports = postteam
const getTeam = async (req, res) => {
    try {
        const result = await team.find({})
        res.send(result)
    } catch (error) {
        console.log(error)
        res.status(501).send({ msg: "something went wrong" })
    }
}
module.exports = getTeam