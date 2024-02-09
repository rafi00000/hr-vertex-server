const { Router } = require("express");
const { handleGetAllDepartment, handlePostingDepartment, handleDeleteDepartment, handleUpdateDepartment, handleGetItemNumber, handleGetOneDepartment } = require("../controllers/department");

const departmentRouter = Router();

departmentRouter.route("/").get(handleGetAllDepartment).post(handlePostingDepartment)
departmentRouter.route("/:id").get(handleGetOneDepartment).delete(handleDeleteDepartment).put(handleUpdateDepartment)
departmentRouter.route("/count/number").get(handleGetItemNumber)


module.exports = departmentRouter;