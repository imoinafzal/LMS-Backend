var express = require("express");
const {
  getStudents,
  createStudent,
  updateStudent,
  deleteStudent,
  enrollStudent,
  coursesByStudent,
} = require("../controller/student/studentController");
var router = express.Router();

/* GET users listing. */
router.get("/getStudents", getStudents);
router.post("/createStudent", createStudent);
router.delete("/deleteStudent/:id", deleteStudent);
router.patch("/updateStudent/:id", updateStudent);
router.post("/enrollStudent", enrollStudent);
router.get("/coursesByStudent/:id", coursesByStudent);

module.exports = router;
