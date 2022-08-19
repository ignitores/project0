const express = require('express');

const { newuser } = require('../controllers/users');

const router = express.Router();

// NEW user -->> http://localhost:8000/user/newuser
router.post('/newuser', newuser);

module.exports = router;