const express = require('express');
const { newCake, updateCake } = require('../controllers/cake');
const router = express.Router();

// NEW cake -->> http://localhost:8000/cake/newcake
router.post('/newcake', newCake);

// Update cake information by id -->> http://localhost:8000/cake/updateCake/id
router.put('/updateCake/:id', updateCake);

// export default router;
module.exports = router;