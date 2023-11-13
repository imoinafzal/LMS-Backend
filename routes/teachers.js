var express = require("express");
const {
  getTeachers,
  createTeacher,
  updateTeacher,
  deleteTeacher,
  registerTeacher,
  coursesByTeacher,
} = require("../controller/teacher/teacherController");
var router = express.Router();

/* GET users listing. */
router.get("/getTeachers", getTeachers);
router.post("/createTeacher", createTeacher);
router.delete("/deleteTeacher/:id", deleteTeacher);
router.patch("/updateTeacher/:id", updateTeacher);
router.post("/registerTeacher", registerTeacher);
router.get("/coursesByTeacher/:id", coursesByTeacher);

module.exports = router;
