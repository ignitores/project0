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

module.exports = { newCake, updateCake, deleteCake, cakesByFlavour, sortByOrders, cakesByTags, cakeByID, allCake };