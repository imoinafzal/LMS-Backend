var express = require('express');
const {getUsers, createUser, deleteUser, updateUser} = require('../controller/user/userController');
var router = express.Router();


/* GET users listing. */
router.get('/getUsers', getUsers);
router.post('/createUser', createUser);
router.delete('/deleteUser/:id', deleteUser);
router.patch('/updateUser/:id', updateUser);


module.exports = router;