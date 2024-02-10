const Projects = require("../models/Projects");

const addProjects = async (req, res) => {
    const data = req.body;
    const result = await Projects.create(data)
    res.send({ success: true, msg: "Posted Successfully" })
}
module.exports = addProjects
const findProject = async (req, res) => {
    try {
        const result = await Projects.find({})
        res.send(result)
    } catch (error) {
        console.log(error)
        res.status(501).send({ msg: "something went wrong" })
    }
}
module.exports = findProject