const express = require("express");
const {
  handleGetAllUser,
  handleGetOneUser,
  handlePostUser,
  handleDeleteUser,
} = require("../controllers/user");
const userRoute = express.Router();

userRoute.route("/").get(handleGetAllUser).post(handlePostUser);
userRoute.route("/:id").get(handleGetOneUser).delete(handleDeleteUser);

module.exports = userRoute;
