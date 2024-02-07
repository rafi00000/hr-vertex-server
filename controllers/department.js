const { ObjectId } = require("mongodb");
const departmentModel = require("../models/department");


const handleGetAllDepartment  = async(req,res) =>{
    const {p, l, s} = req.query;
    const page = parseInt(req.query.p) || 1;
    const limit = parseInt(req.query.l) || 10;
    const skip = (page - 1) * limit;
    console.log({p, l});
    let query = {}
    if(s){
        query = {dept_name: s}
    }
    try {
        const result = await departmentModel.find(query).skip(skip).limit(limit);
        res.status(200).send(result);
    } catch (error) {
        res.status(501).send({msg: "something went wrong"});
    }
}


const handlePostingDepartment = async(req, res) =>{
    const data = req.body;
    try {
        const result = await departmentModel.create(data);
        res.status(200).send({msg: "Successfully Created Department", success: true});
    } catch (error) {
        res.status(501).send({msg: "Something went wrong", success: false});
    }
}

const handleUpdateDepartment = async(req, res) =>{
    const id = req.params.id;
    const data = req.body;
    const query = {_id: new ObjectId(id)}
    const updateDoc = {
        $set: {
            ...data
        }
    }
    try {
        const result = departmentModel.updateOne(query, updateDoc);
        res.status(200).send({msg: "Updated Successfully", success: true});
    } catch (error) {
        res.status(501).send({msg: "Something went wrong", success: false});
    }
}

const handleDeleteDepartment = async(req, res) =>{
    const id = req.params.id;
    const query = {_id: new ObjectId(id)};
    try {
        const result = await departmentModel.deleteOne(query);
        res.status(200).send({msg: "Deleted Successfully", success: true});
    } catch (error) {
        res.status(501).send({msg: "Something went wrong", success: false});
    }
}




module.exports = {
    handleGetAllDepartment,
    handlePostingDepartment,
    handleDeleteDepartment,
    handleUpdateDepartment
}