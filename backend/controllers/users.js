const Users = require('../models/Users');

const newuser = async (req, res) => {
    try {
        let user = new Users(req.body);
        user = await user.save();
        res.status(200).json({
            message: "User Registration successful"
        });
    } catch (err) {
        res.status(400).json({
            status: 400,
            message: err.message,
        });
    }
}

module.exports = { newuser };

