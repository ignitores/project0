const express = require('express');
const auth = require("../middleware/auth");

const { newuser, userlogin, updateuser, deleteuser } = require('../controllers/users');

const router = express.Router();

// NEW user -->> http://localhost:8000/user/newuser
router.post('/newuser', newuser);

router.post('/userlogin', userlogin);

router.put('/updateuser/:id', updateuser);

router.delete('/deleteuser/:id', deleteuser);

module.exports = router;