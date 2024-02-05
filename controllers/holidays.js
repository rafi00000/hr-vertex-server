const holidays = require("../models/holiday");

const PostHoliday = async (req, res) => {
    const data = req.body;
    const result = await holidays.create(data)
    res.send({ success: true, msg: "Posted Successfully" })
}
module.exports = PostHoliday
const GetHoliday = async (req, res) => {
    try {
        const result = await holidays.find({})
        res.send(result)
    } catch (error) {
        console.log(error)
        res.status(501).send({ msg: "something went wrong" })
    }
}
module.exports = GetHoliday