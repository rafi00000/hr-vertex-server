const { ObjectId } = require("mongodb");
const attendanceModel = require("../models/attendance");

const handleGetAttendance = async(req, res) =>{
    const result = await attendanceModel.find();
    res.status(200).send(result);
}

const handleAttendancePost = async(req, res) =>{
    const data = req.body;
    try {
        const result = await attendanceModel.create(data);
        res.status(200).send({msg: "Successfully Added", success: true, data: result})
    } catch (error) {
        res.status(501).send({msg: "Something went wrong", success: false})
    }
}

const handleUpdateAttendance = async(req, res) =>{
    const data = req.body;
    const updateDate = data?.data;
    const query = {_id: new ObjectId(data?.id)};
    const updateDoc = {$set: {
        ...updateDate
    }};

    try {
        const result = await attendanceModel.updateOne(query, updateDoc);
        res.status(200).send({});

    } catch (error) {
        res.status(501).send({msg: "Something went wrong", success: false})
    }
}


module.exports = {
    handleAttendancePost,
    handleGetAttendance,
    handleUpdateAttendance
}