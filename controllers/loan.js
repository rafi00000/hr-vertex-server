const loan = require("../models/loan");

const  LoanPost = async (req, res) => {
    const data = req.body;
    const result = await loan.create(data)
    res.send({ success: true, msg: "Posted Successfully" })
}
module.exports = LoanPost
const LoanGet = async (req, res) => {
    try {
        const result = await loan.find({})
        res.send(result)
    } catch (error) {
        console.log(error)
        res.status(501).send({ msg: "something went wrong" })
    }
}
module.exports = LoanGet