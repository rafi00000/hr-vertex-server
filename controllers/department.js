const { ObjectId } = require("mongodb");
const departmentModel = require("../models/department");


const handleGetAllDepartment = async (req, res) => {
    try {
        const { p = 1, l = 10, s } = req.query;
        const page = parseInt(p, 10);
        const limit = parseInt(l, 10);
        const skip =  page * limit;
        console.log({p,l,s})

        const query = s ? { dept_name: { $regex: new RegExp(s, 'i') } } : {};

        const result = await departmentModel.find(query).skip(skip).limit(limit);
        res.status(200).send(result);
    } catch (error) {
        console.error(error);
        res.status(500).send({ msg: "Something went wrong", error: error.message });
    }
};

const handleGetItemNumber = async(req, res) =>{
    try {
        const result = await departmentModel.estimatedDocumentCount();
        console.log(result)
        res.status(200).send({count: result});
    } catch (error) {
        res.status(500).send({msg: "error"})
    }
};

const handlePostingDepartment = async(req, res) =>{
    const data = req.body;
    try {
        const result = await departmentModel.create(data);
        res.status(200).send({msg: "Successfully Created Department", success: true});
    } catch (error) {
        res.status(500).send({msg: "Something went wrong", success: false});
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
        res.status(500).send({msg: "Something went wrong", success: false});
    }
}

const handleDeleteDepartment = async(req, res) =>{
    const id = req.params.id;
    const query = {_id: new ObjectId(id)};
    try {
        const result = await departmentModel.deleteOne(query);
        res.status(200).send({msg: "Deleted Successfully", success: true});
    } catch (error) {
        res.status(500).send({msg: "Something went wrong", success: false});
    }
}




module.exports = {
    handleGetAllDepartment,
    handlePostingDepartment,
    handleDeleteDepartment,
    handleUpdateDepartment,
    handleGetItemNumber
}