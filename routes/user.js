const express = require("express");
const {
  handleGetAllUser,
  handleGetOneUser,
  handlePostUser,
  handleDeleteUser,
  handleUpdateUser,
  handleGethasteamUser
} = require("../controllers/user");
const userRoute = express.Router();

userRoute.route("/").get(handleGetAllUser).post(handlePostUser);
userRoute.route("/hasteam").get(handleGethasteamUser)
userRoute.route("/:id").get(handleGetOneUser).delete(handleDeleteUser).put(handleUpdateUser);

module.exports = userRoute;
