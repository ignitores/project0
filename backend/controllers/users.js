const Users = require('../models/Users');
const bcrypt = require('bcryptjs')
const jwt = require('jsonwebtoken')

const newuser = async (req, res) => {
    try {
        const { firstname, lastname, mobnumber, email, password } = req.body;
        let olduser = await Users.findOne({ email: email });
        if (olduser) {
            return res.status(409).send("User Already exist");
        }
        encryptedpassword = await bcrypt.hash(password, 10);
        const user = await Users.create({
            firstname,
            lastname,
            email: email.toLowerCase(),
            password: encryptedpassword,
        });
        const token = jwt.sign(
            { user_id: user._id, email },
            process.env.TOKEN_KEY,
            {
                expiresIn: "2h",
            }
        );
        user.token = token;
        res.status(200).json({
            message: "User Registration successful",
            token: token
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
        const { email, password } = req.body
        const user = await Users.findOne({ email });
        if (!user) {
            return res.status(404).json({ message: "User not found" });
        }
        if (user && (await bcrypt.compare(password, user.password))) {
            const token = jwt.sign(
                { user_id: user._id, email },
                process.env.TOKEN_KEY,
                {
                    expiresIn: "2h",
                }
            );
            user.token = token
            res.status(200).json({
                message: "login successful",
                token: token
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

