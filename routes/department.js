const { Router } = require("express");
const { handleGetAllDepartment, handlePostingDepartment, handleDeleteDepartment, handleUpdateDepartment, handleGetItemNumber } = require("../controllers/department");

const departmentRouter = Router();

departmentRouter.route("/").get(handleGetAllDepartment).post(handlePostingDepartment);
departmentRouter.route("/:id").delete(handleDeleteDepartment).put(handleUpdateDepartment);
departmentRouter.route("/count").get(handleGetItemNumber)


module.exports = departmentRouter;