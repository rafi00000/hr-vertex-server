const { ObjectId } = require("mongodb");
const userModel = require("../models/user");
const leave = require("../models/leave");
const LeavePost = async (req, res) => {
    const data = req.body;
    const result = await leave.create(data)
    console.log(result)
    res.send({ success: true, msg: "Posted Successfully" })
}
const leaveGet = async (req, res) => {
    const { user } = req.query;
    if (!user) {
        return res.status(501).send({ msg: "something went wrong user not found" })
    }
    try {
        const Requesteduser = await userModel.findOne({ email: user })
        let filter = {}
        if (Requesteduser?.role === 'admin') {
            filter = {}
        } else {
            filter = { user: new ObjectId(Requesteduser?._id) }
        }
        const result = await leave.find(filter).populate({
            path: 'user',
            select: '_id email FullName photo'
        })
        res.send(result)
    } catch (error) {
        console.log(error)
        res.status(501).send({ msg: "something went wrong" })
    }
}
module.exports = { leaveGet, LeavePost }