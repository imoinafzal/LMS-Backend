# LMS-Backend
I have developed this backend application for a Learning Management System.
# Installation
# Usage
You can use these following end points to create different students and teachers as well as assigning a course to a teacher or even enrolling a student in a particular course.
# API Documentation

1. Create a New Course
* Endpoint: POST /courses/createCourse
* Description: Create a new course.
* Request : POST http://localhost:3000/courses/createCourse

2. Get All courses list
* Endpoint: GET /courses/getCourses
* Description: Retrieve a list of all courses.
* Request : GET http://localhost:3000/courses/getCourses

3. Get Specific Course Details
* Endpoint: GET /courses/getCourseDetail/:id
* Description: Get detailed information about a specific course.
* Parameters: id: The unique identifier of the course.
* Request : GET http://localhost:3000/courses/getCourseDetail/2

4. Delete a Course
* Endpoint: DELETE /courses/deleteCourse/:id
* Description: Delete any course.
* Parameters: id: The unique identifier of the course.
* Request : DELETE http://localhost:3000/courses/deleteCourse/5

5. Update a specific course details
* Endpoint: PATCH /courses/updateCourse/:id
* Description: Update information for a specific course.
* Parameters: id: The unique identifier of the course.
* Request : PATCH http://localhost:3000/courses/updateCourse/2

6. Register a teacher
* Endpoint: POST /teachers/registerTeacher
* Description: Register a teacher in a course
* Request : POST http://localhost:3000/teachers/registerTeacher
* {
    "teacherID" : 1,
    "courseID" : 2
}

7. Get a list of courses taught by any teacher
* Endpoint: GET /teachers/coursesByTeacher/:id
* Description: Get a list of courses taught by any teacher
* Parameters: id: The unique identifier of the teacher.
* Request : GET http://localhost:3000/teachers/coursesByTeacher/1

8. Enroll Student in a Course
* Endpoint: POST /students/enrollStudent
* Description: Enroll a student in a course.
* Request : POST http://localhost:3000/students/enrollStudent
* {
  "studentID": 1,
  "courseID": 2
}

9. Get Courses Enrolled by a Student
* Endpoint: GET /students/coursesByStudent/:id
* Description: Get a list of courses enrolled by a specific student.
* Parameters: id: The unique identifier of the student.
* Request : GET http://localhost:3000/students/coursesByStudent/1
