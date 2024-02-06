const { ObjectId } = require("mongodb");
const attendanceModel = require("../models/attendance");

const handleGetAttendance = async(req, res) =>{
    try {
        const result = await attendanceModel.find();
        res.status(200).send(result);
        
    } catch (error) {
        res.status(501).send({msg: "something went wrong", })
    }
}

const handleAttendancePost = async(req, res) =>{
    const data = req.body;
    console.log(data)
    try {
        const result = await attendanceModel.create(data);
        res.status(200).send({msg: "Clock In Successful", success: true, data: result})
    } catch (error) {
        console.log(error)
        res.status(501).send({msg: "Something went wrong", success: false})
    }
}

const handleUpdateAttendance = async(req, res) =>{
    const emp_id = req.params.id;
    const updateDate = {clockOut: Date.now()};
    const query = {_id: new ObjectId(emp_id)};

    console.log(updateDate)
    const updateDoc = {$set: {
        ...updateDate
    }};

    try {
        const result = await attendanceModel.updateOne(query, updateDoc);
        res.status(200).send({msg: "successfully clocked out Bye Bye", success: true});

    } catch (error) {
        res.status(501).send({msg: "Something went wrong", success: false})
    }
}


module.exports = {
    handleAttendancePost,
    handleGetAttendance,
    handleUpdateAttendance
}