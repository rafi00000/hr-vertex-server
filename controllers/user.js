const { ObjectId } = require("mongodb");
const userModel = require("../models/user");

const handleGetAllUser = async (req, res) => {
  const result = await userModel.find();
  return res.json(result);
};
const handleGethasteamUser = async (req, res) => {
  const result = await userModel.find({ team: 'none' });
  return res.json(result);
};

const handleGetOneUser = async (req, res) => {
  const email = req.params.id;
  const query = { email: email };
  try {
    const result = await userModel.findOne(query);
    res.send({ success: true, data: result });
  } catch (error) {
    res.status(500).send({ message: error.message });
  }
};

const handlePostUser = async (req, res) => {


  const FullName = req.body.FullName;
  const email = req.body.email;
  const password = req.body.password;
  const Gender = req.body.Gender;
  const Salary = req.body.Salary;
  const Address = req.body.Address;
  const Designation = req.body.Designation;
  const JoiningDate = req.body.JoiningDate;
  const PhoneNumber = req.body.PhoneNumber;
  const photo = req.body.photo;
  const role = req.body.role;


  const data = {
    FullName,
    email,
    password,
    Gender,
    Salary,
    Address,
    Designation,
    JoiningDate,
    PhoneNumber,
    photo,
    role,
  };
  console.log(data)
  try {
    const result = await userModel.create(data);
    res.send({ success: true, message: "User created successfully" });
  } catch (err) {
    res.send({ message: err.message });
  }
};

// update user

const handleUpdateUser = async (req, res) => {
  const id = req.params.id;
  const query = { _id: new ObjectId(id) };
  const data = req.body;
  const updateDoc = {
    $set: {
      ...data
    }
  }
  try {
    const result = await userModel.updateOne(query, updateDoc);
    console.log(result)
    res.json({ success: true, message: "Successfully updated" })
  } catch (error) {
    res.json({ success: false, message: "something went wrong" })
  }
}

const handleDeleteUser = async (req, res) => {
  const id = req.params.id;
  const query = { _id: new ObjectId(id) };
  console.log(id)
  try {
    const result = await userModel.deleteOne(query);
    res.send({ success: true, data: result });
  } catch (error) {
    res.send({ message: "something went wrong! Unsuccessful" });
  }
};

const handleGetEmployeeNames = async(req, res) =>{
  const pipeline = [
    {
      $project: {
        FullName: 1
      }
    }
  ]
  try {
    const result = await userModel.aggregate(pipeline);
    console.log(result)
    res.send(result)
  } catch (error) {
    res.status(500).send({msg: "error"})
  }
}

module.exports = {
  handleGetAllUser,
  handleGetOneUser,
  handlePostUser,
  handleDeleteUser,
  handleUpdateUser,
  handleGetEmployeeNames,
  handleGethasteamUser
};
