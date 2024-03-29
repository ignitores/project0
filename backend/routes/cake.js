const express = require('express');
const {
    newCake,
    updateCake,
    deleteCake,
    cakesByFlavour,
    sortByOrders,
    cakesByTags,
    cakeByID,
    allCake,
    mostReviewed,
    recentness,
    cakesByTags_SortedByReviews,
    cakesByTags_SortedByOrders,
    cakesByFlavour_SortedByPrice,
    cakesByFlavour_SortedByPriceDesc,
    cakeByFlavours_sortedByReviews,
    cakeByFlavours_sortByOrders,
    cakesByTags_SortedByPriceAsc,
    cakesByTags_SortedByPriceDesc,
    cakeByTags_sortedByReviews,
} = require('../controllers/cake');

const router = express.Router();

// ******************  ⭐⭐⭐⭐⭐ CAKE COMMON APIS  ⭐⭐⭐⭐⭐ ******************

// NEW cake -->> http://localhost:8000/cake/newcake
router.post('/newcake', newCake);

// Update cake information by id -->> http://localhost:8000/cake/updateCake/id
router.put('/updateCake/:id', updateCake);

// Delete cake information by id -->> http://localhost:8000/cake/deleteCake/id
router.delete('/deleteCake/:id', deleteCake);

// get cake info by ID -->> http://localhost:8000/cake/cakeByID/id
router.get('/cakeByID/:id', cakeByID)

// get all cakes -->> http://localhost:8000/cake/allcakes
router.get('/allcakes', allCake)

//get cakes by Review -->>  http://localhost:8000/cake/mostReviewed
router.get('/mostReviewed', mostReviewed)

//get cakes by Recentness -->>  http://localhost:8000/cake/recentness
router.get('/Recentness', recentness)

// get all cake info by orders (most ordered to least ordered) -->> http://localhost:8000/cake/cakeByOrder
router.get('/cakeByOrder', sortByOrders)

// ********************************************************************************

// ****************  ⭐⭐⭐⭐⭐ CAKE FLAVOURS APIS  ⭐⭐⭐⭐⭐ ****************

// get all cake info by flavour -->> http://localhost:8000/cake/cakesByFlavour/flavour
router.get('/cakesByFlavour/:flavour', cakesByFlavour)

//get cakes by flavour also sorted in asc order by price -->> http://localhost:8000/cake/cakesByFlavourSortedByPrice/{flavour}
router.get('/cakesByFlavourSortedByPrice/:flavour', cakesByFlavour_SortedByPrice)

//get cakes by flavour also sorted in desc order by price -->> http://localhost:8000/cake/cakesByFlavourSortedByPriceDesc/{flavour}
router.get('/cakesByFlavourSortedByPriceDesc/:flavour', cakesByFlavour_SortedByPriceDesc)

// get cake by flavours and reviews (best to worst reviews) -->> http://localhost:8000/cake/cakesByFlavoursSortedByReviews/{flavour}
router.get('/cakesByFlavoursSortedByReviews/:flavour', cakeByFlavours_sortedByReviews);

// get cake by flavours and orders (most to least) -->> http://localhost:8000/cake/cakesByFlavoursSortByOrders/{flavour}
router.get('/cakesByFlavoursSortByOrders/:flavour', cakeByFlavours_sortByOrders);

// *********************************************************************************

// ******************  ⭐⭐⭐⭐⭐ CAKE TAGS APIS  ⭐⭐⭐⭐⭐ ******************

// get all cake info by tags -->> http://localhost:8000/cake/cakesByTags/tags
router.get('/cakesByTags/:tags', cakesByTags)

//get cakes by tag also sorted in Desc order by rating -->> http://localhost:8000/cake/cakesByTagsSortedByReviews/{tag}
router.get('/cakesByTagsSortedByReviews/:tags', cakesByTags_SortedByReviews)

//get cakes by tag also sorted in most to least ordered -->> http://localhost:8000/cake/cakesByTagsSortedByOrders/{tag}
router.get('/cakesByTagsSortedByOrders/:tags', cakesByTags_SortedByOrders)

//get all cake by particular tags and sorted by price(low to high)-->> http://localhost:8000/cake/cakesByTagsSortedByPriceAsc/{tag}
router.get('/cakesByTagsSortedByPriceAsc/:tags', cakesByTags_SortedByPriceAsc);

//get all cake by particular tags and sorted by price(high to low)-->> http://localhost:8000/cake/cakesByTagsSortedByPriceDesc/{tag}
router.get('/cakesByTagsSortedByPriceDesc/:tags', cakesByTags_SortedByPriceDesc);

//get all cake by particular tags and sorted by review(most to worst)-->> http://localhost:8000/cake/cakeByTags_sortedByReviews/{tag}
router.get('/cakeByTags_sortedByReviews/:tags', cakeByTags_sortedByReviews);

// ********************************************************************************

// export default router;
module.exports = router;
