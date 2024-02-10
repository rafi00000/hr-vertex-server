const express = require("express");
const {
  handleGetAllUser,
  handleGetOneUser,
  handlePostUser,
  handleDeleteUser,
  handleUpdateUser,
  handleGetEmployeeNames,
  handleGethasteamUser
} = require("../controllers/user");
const userRoute = express.Router();

userRoute.route("/").get(handleGetAllUser).post(handlePostUser);
userRoute.route("/hasteam").get(handleGethasteamUser)
userRoute.route("/:id").get(handleGetOneUser).delete(handleDeleteUser).put(handleUpdateUser);
userRoute.route("/emp_name").get(handleGetEmployeeNames)

module.exports = userRoute;
