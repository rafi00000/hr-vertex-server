const holidays = require("../models/holiday");

const postHoliday = async (req, res) => {
    const data = req.body;
    console.log("got a post req");
    try {
        const result = await holidays.create(data);
        res.send({ success: true, msg: "Posted Successfully" }) 
    } catch (error) {
        res.status(500).send({msg: "Something went wrong", success: false})
    }
}

const getHoliday = async (req, res) => {
    console.log("got a get req")
    try {
        const result = await holidays.find({})
        res.send(result)
    } catch (error) {
        console.log(error)
        res.status(500).send({ msg: "something went wrong" })
    }
}

module.exports = {
    getHoliday,
    postHoliday
};