var express = require('express');
const {getCourses, createCourse, updateCourse, deleteCourse, getCourseDetail} = require('../controller/courses/courseController');
var router = express.Router();


/* GET users listing. */
router.get('/getCourses', getCourses);
router.get('/getCourseDetail/:id', getCourseDetail);
router.post('/createCourse', createCourse);
router.delete('/deleteCourse/:id', deleteCourse);
router.patch('/updateCourse/:id', updateCourse);


module.exports = router;