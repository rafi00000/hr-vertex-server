const applicationModel = require("../models/application");

const handleGetApplications = async(req,res) =>{
    try {
        const result = await applicationModel.find();
        res.send(result);
    } catch (error) {
        res.status(501).send({msg: "something went wrong"})
    }
}

const handleApplicationPost = async(req, res) =>{
    const data = req.body;
    console.log(data);
    try {
        const result= applicationModel.create(data);
        res.send({success: true, msg: "Posted Successfully"});
    } catch (error) {
        res.status(501).send({msg: "something went wrong"});
    }
}


const handleGetOneApplication = async(req, res) =>{
    const email = req.query.email;
    const query = {email: email};
    try {
        const result = applicationModel.findOne(query)
        res.status(200).send({msg: "success"})
    } catch (error) {
        
    }
}



module.exports = {
    handleApplicationPost,
    handleGetApplications
}