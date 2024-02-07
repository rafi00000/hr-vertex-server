const { Router } = require("express");
const { handleGetAllDepartment, handlePostingDepartment, handleDeleteDepartment, handleUpdateDepartment } = require("../controllers/department");

const departmentRouter = Router();

departmentRouter.route("/").get(handleGetAllDepartment).post(handlePostingDepartment);
departmentRouter.route("/:id").delete(handleDeleteDepartment).put(handleUpdateDepartment);


module.exports = departmentRouter;