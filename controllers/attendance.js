const { ObjectId } = require("mongodb");
const attendanceModel = require("../models/attendance");

const handleGetAttendance = async(req, res) =>{
    const {name, date, month} = req.query;

    let query = {}
    if(name && date && month){
        query = {name: name, date: date, month: month}
    }
    else if(name && date){
        query = {name: name, date: date}
    }
    else if(name && month){
        query = {name: name, month: month}
    }
    else if (month && date){
        query = {month: month, date: date}
    }
    else if(name){
        query = {name: name}
    }
    else if (date){
        query = {date: date}
    }
    else if(month){
        query = {month: month}
    }
    console.log(query)

    try {
        const result = await attendanceModel.find(query);
            res.status(200).send(result);
        } catch (error) {
            res.status(501).send({msg: "something went wrong"});
        }
}

const handleAttendancePost = async(req, res) =>{
    const data = req.body;
    const date = data.date;
    try {
        const result = await attendanceModel.create({...data, date});
        res.status(200).send({msg: "Clock In Successful", success: true, data: result});
    } catch (error) {
        console.log(error)
        res.status(501).send({msg: "Something went wrong", success: false});
    }
}

const handleUpdateAttendance = async(req, res) =>{
    const attendance_id = req.params.id;
    console.log(attendance_id);
    const updateDate = {clockOut: Date.now()};
    const query = {_id: new ObjectId(attendance_id)};

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