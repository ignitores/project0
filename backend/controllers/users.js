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

const userlogin = async (req, res) => {
    try {
        let user = await Users.findOne({ username: req.body.username });
        if (!user) {
            return res.status(404).json({ message: "User not found" });
        }
        if (req.body.mobnumber === user.mobnumber) {
            res.status(200).json({
                message: "login successful"
            });
        } else {
            res.status(401).json({
                message: "invalid credentials"
            })
        }
    } catch (err) {
        res.status(400).json({
            status: 400,
            message: err.message,
        });
    }
}

const updateuser = async (req, res) => {
    try {
        let user = await Users.findByIdAndUpdate(req.params.id, {
            $set: req.body
        });

        if (user == null) {
            return res.status(404).json({
                status: 404,
                message: "User does not exist"
            })
        }
        res.status(200).json({
            message: "User information updated successfully"
        })
    } catch (error) {
        return res.status(500).json(error);
    }
}

const deleteuser = async (req, res) => {
    try {
        let user = await Users.findByIdAndDelete(req.params.id);
        if (user == null) {
            return res.status(400).json({
                status: 400,
                message: "User does not exist"
            })
        }

        res.status(200).json({
            message: "User information deleted successfully",
        })
    } catch (err) {
        return res.status(400).json(err);
    }
}

module.exports = { newuser, userlogin, updateuser, deleteuser };

