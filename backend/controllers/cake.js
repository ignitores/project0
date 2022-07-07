const Cakes = require('../models/Cake');

// add new cake
const newCake = async (req, res) => {
    try {
        let cake = new Cakes(req.body);
        cake = await cake.save();
        res.status(200).json({
            message: "New cake added successfully"
        });
    } catch (err) {
        res.status(400).json({
            status: 400,
            message: err.message,
        });
    }
}

// update cake information by id
const updateCake = async (req, res) => {
    try {

        let cake = await Cakes.findByIdAndUpdate(req.params.id, {
            $set: req.body,
        });
        if (cake == null) {
            return res.status(404).json({
                status: 404,
                message: "Cake does not exist"
            })
        }
        let updatedCake = await Cakes.findById(req.params.id);
        res.status(200).json({
            message: "Cake information updated successfully"
        })

    } catch (error) {
        return res.status(500).json(error);
    }
}

// delete cake information by id
const deleteCake = async (req, res) => {
    try {
        const deletecake = await Cakes.findByIdAndDelete(req.params.id);
        // console.log("Running");

        if (deletecake == null) {
            return res.status(400).json({
                status: 400,
                message: "Cake does not exist"
            })
        }

        res.status(200).json({
            message: "Cake information deleted successfully",
        })
    }
    catch (err) {
        return res.status(400).json(err);
    }
}

// get all cake info by flavours
const cakesByFlavour = async (req, res) => {
    try {
        const cakebyflavour = await Cakes.find({ 'flavour': req.params.flavour });

        if (cakebyflavour.length == 0) {
            return res.status(404).json({
                status: 404,
                message: "cake not found"
            })
        }
        res.status(200).json(cakebyflavour)

    } catch (err) {

        return res.status(400).json(err);
    }
}

// get all cake info by orders (most ordered to least ordered)
const sortByOrders = async (req, res) => {
    try {
        let sortByOrder = await Cakes.find({})
        // sort -> most ordered to least ordered
        sortByOrder.sort((p1, p2) => {
            return (p2.totalOrders - p1.totalOrders);
        })
        res.status(200).json(sortByOrder)

    } catch (error) {
        return res.status(400).json({
            status: 400,
            message: error.message,
        });
    }
}


// get all cake info by Tags
const cakesByTags = async (req, res) => {
    try {
        const cakebytags = await Cakes.find({ 'tags': req.params.tags });

        if (cakebytags.length == 0) {
            return res.status(404).json({
                status: 404,
                message: "Cakes not found"
            })
        }
        res.status(200).json(cakebytags)

    } catch (err) {

        return res.status(400).json(err);
    }
}


// get cake info by ID
const cakeByID = async (req, res) => {
    try {
        const cakebyID = await Cakes.findById(req.params.id);

        if (cakebyID.length == 0) {
            return res.status(404).json({
                status: 404,
                message: "cake not found"
            })
        }
        res.status(200).json(cakebyID)

    } catch (err) {

        return res.status(400).json(err);
    }
}

//get all cake info
const allCake = async (req, res) => {
    try {
        const allcake = await Cakes.find();

        if (allcake.length == 0) {
            return res.status(404).json({
                status: 404,
                message: "Database is empty"
            })
        }

        res.status(200).json(allcake);

    } catch (err) {
        return res.status(400).json(err);
    }
}

//get most mostReviewed cakes
const mostReviewed = async (req, res) => {
    try {
        let mostReviewed = await Cakes.find({})
        mostReviewed.sort((p1, p2) => {
            return (p2.totalNoOfReviews - p1.totalNoOfReviews);
        })
        res.status(200).json(mostReviewed)

    } catch (error) {
        return res.status(400).json({
            status: 400,
            message: error.message,
        });
    }
}

//get most Recent cakes
const recentness = async (req, res) => {
    try {
        let recentness = await Cakes.find({})
        recentness.sort((p1, p2) => {
            return (p2.createdAt - p1.createdAt);
        })
        res.status(200).json(recentness)

    } catch (error) {
        return res.status(400).json({
            status: 400,
            message: error.message,
        });
    }
}

//get all info by tags and in sorted order(by rating)
const cakesByTags_SortedByReviews = async (req, res) => {
    try {
        const cakebytags_by_reviews = await Cakes.find({ 'tags': req.params.tags });

        if (cakebytags_by_reviews.length == 0) {
            return res.status(404).json({
                status: 404,
                message: "Cakes not found"
            })
        }

        cakebytags_by_reviews.sort((p1, p2) => {
            return ((p2.sumOfReviews / p2.totalNoOfReviews) - (p1.sumOfReviews / p1.totalNoOfReviews))
        })

        res.status(200).json(cakebytags_by_reviews)
    } catch (err) {

        return res.status(400).json(err);
    }
}

//get all cake info by flavour and sorted by price(asc to desc)
const cakesByFlavour_SortedByPrice = async (req, res) => {
    try {
        const cakebyflavour_sortedbyprice = await Cakes.find({ 'flavour': req.params.flavour });

        if (cakebyflavour_sortedbyprice.length == 0) {
            return res.status(404).json({
                status: 404,
                message: "cake not found"
            })
        }

        cakebyflavour_sortedbyprice.sort((p1, p2) => {
            return (Object.values(p1.sizeAndPrice)[0] - Object.values(p2.sizeAndPrice)[0])
        })

        res.status(200).json(cakebyflavour_sortedbyprice)

    } catch (err) {

        return res.status(400).json(err);
    }
}
//get all cake info by particular tags and sorted by orders(most to least)
const cakesByTags_SortedByOrders = async (req, res) => {
    try {
        const cakesbytags_sortedbyorders = await Cakes.find({ 'tags': req.params.tags });

        if (cakesbytags_sortedbyorders.length == 0) {
            return res.status(404).json({
                status: 404,
                message: "cake not found"
            })
        }

        cakesbytags_sortedbyorders.sort((p1, p2) => {
            return (p2.totalOrders - p1.totalOrders)
        })

        res.status(200).json(cakesbytags_sortedbyorders)

    } catch (err) {

        return res.status(400).json(err);
    }
}

// get all cake info by particular flavours and reviews (best to worst reviews)
const cakeByFlavours_sortedByReviews = async (req, res) => {
    try {
        const cakeByFlavours_sortByReviews = await Cakes.find({ 'flavour': req.params.flavour });

        if (cakeByFlavours_sortByReviews == null) {
            return res.status(404).json({
                status: 404,
                message: "Cakes not found"
            })
        }

        cakeByFlavours_sortByReviews.sort((p1, p2) => {
            return ((p2.sumOfReviews / p2.totalNoOfReviews) - (p1.sumOfReviews / p1.totalNoOfReviews));
        })
        res.status(200).json(cakeByFlavours_sortByReviews);

    } catch (error) {
        return res.status(400).json(error);
    }
}

// get cake by flavours and orders (most to least ordered)
const cakeByFlavours_sortByOrders = async (req, res) => {
    try {
        const cakeByFlavours_sortByOrders = await Cakes.find({ 'flavour': req.params.flavour });

        if (cakeByFlavours_sortByOrders == null) {
            return res.status(404).json({
                status: 404,
                message: "Cakes not found"
            })
        }

        cakeByFlavours_sortByOrders.sort((p1, p2) => {
            return ((p2.totalOrders) - (p1.totalOrders));
        })
        res.status(200).json(cakeByFlavours_sortByOrders);

    } catch (error) {
        return res.status(400).json(error);
    }
}

module.exports = {
    newCake,
    updateCake,
    deleteCake,
    cakesByFlavour,
    sortByOrders,
    cakesByTags,
    cakeByID,
    allCake,
    mostReviewed,
    recentness, cakesByTags_SortedByReviews,
    cakesByFlavour_SortedByPrice,
    cakesByTags_SortedByOrders,
    cakeByFlavours_sortedByReviews,
    cakeByFlavours_sortByOrders,
};