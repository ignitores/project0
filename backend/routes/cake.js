const express = require('express');
const { newCake, updateCake, deleteCake, cakesByFlavour, sortByOrders,cakesByTags,cakeByID, allCake,mostReviewed,recentness,cakesByTags_SortedByReviews,cakesByFlavour_SortedByPrice} = require('../controllers/cake');
const router = express.Router();

// NEW cake -->> http://localhost:8000/cake/newcake
router.post('/newcake', newCake);

// Update cake information by id -->> http://localhost:8000/cake/updateCake/id
router.put('/updateCake/:id', updateCake);

// Delete cake information by id -->> http://localhost:8000/cake/deleteCake/id
router.delete('/deleteCake/:id', deleteCake);

// get all cake info by flavour -->> http://localhost:8000/cake/cakesByFlavour/flavour
router.get('/cakesByFlavour/:flavour', cakesByFlavour)

// get all cake info by orders (most ordered to least ordered) -->> http://localhost:8000/cake/cakeByOrder
router.get('/cakeByOrder', sortByOrders)

// get all cake info by tags -->> http://localhost:8000/cake/cakesByTags/tags
router.get('/cakesByTags/:tags', cakesByTags)

// get cake info by ID -->> http://localhost:8000/cake/cakeByID/id
router.get('/cakeByID/:id', cakeByID)

// get all cakes -->> http://localhost:8000/cake/allcakes
router.get('/allcakes',allCake)

//get cakes by Review -->>  http://localhost:8000/cake/mostReviewed
router.get('/mostReviewed', mostReviewed)

//get cakes by Recentness -->>  http://localhost:8000/cake/recentness
router.get('/Recentness', recentness)

//get cakes by tag also sorted in Desc order by rating -->> http://localhost:8000/cake/cakesByTagsSortedByReviews/{tag}
router.get('/cakesByTagsSortedByReviews/:tags',cakesByTags_SortedByReviews)

//get cakes by flavour also sorted in asc order by price -->> http://localhost:8000/cake/cakesByFlavourSortedByPrice/{flavour}
router.get('/cakesByFlavourSortedByPrice/:flavour',cakesByFlavour_SortedByPrice)



// export default router;
module.exports = router;