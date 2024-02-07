const { ObjectId } = require("mongodb");
const userModel = require("../models/user");

const handleGetAllUser = async (req, res) => {
  const result = await userModel.find();
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
  const data = req.body;
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

module.exports = {
  handleGetAllUser,
  handleGetOneUser,
  handlePostUser,
  handleDeleteUser,
  handleUpdateUser
};
