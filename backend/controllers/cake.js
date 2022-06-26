const Cakes = require('../models/Cake');

// add new cake
const newCake = async (req, res) => {
    try {
        let cake = new Cakes(req.body);
        cake = await cake.save();
        res.status(200).json({
            status: 200,
            data: cake,
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
        await Cakes.findByIdAndUpdate(req.params.id, {
            $set: req.body,
        });
        let updatedCake = await Cakes.findById(req.params.id);

        res.status(200).json({
            status: 200,
            message: "Cake information updated successfully",
            data: updatedCake
        })

    } catch (error) {
        return res.status(500).json(error);
    }
}

const deleteCake = async(req,res) => {
    try {
        const deletecake = await Cakes.findByIdAndDelete(req.params.id);
        // console.log("Running");

        if(deletecake == null) {
            return res.status(400).json({
                status: 400,
                message: "Cake does not exist"
            })
        }
        
        res.status(200).json({
            status: 200,
            message: "Cake information deleted successfully",
            data: deletecake
        })
		}
    catch(err) {
        return res.status(400).json(err);
    }
}


module.exports = { newCake, updateCake,deleteCake };