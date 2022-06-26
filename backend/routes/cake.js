const express = require('express');
const { newCake, updateCake, deleteCake, cakesByFlavour, sortByOrders } = require('../controllers/cake');
const router = express.Router();

// NEW cake -->> http://localhost:8000/cake/newcake
router.post('/newcake', newCake);

// Update cake information by id -->> http://localhost:8000/cake/updateCake/id
router.put('/updateCake/:id', updateCake);

// Delte cake information by id -->> http://localhost:8000/cake/deleteCake/id
router.delete('/deleteCake/:id', deleteCake);

// get all cake info by flavour -->> http://localhost:8000/cake/cakesByFlavour/flavour
router.get('/cakesByFlavour/:flavour', cakesByFlavour)

// get all cake info by orders (most ordered to least ordered) -->> http://localhost:8000/cake/cakeByOrder
router.get('/cakeByOrder', sortByOrders)

// export default router;
module.exports = router;