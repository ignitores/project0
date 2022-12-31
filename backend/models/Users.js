const mongoose = require('mongoose');

let Schema = mongoose.Schema;

let usersSchema = new Schema(
    {
        firstname: {
            type: String
        },
        lastname: {
            type: String
        },
        mobnumber: {
            type: Number,
        },
        email: {
            type: String,
        },
        password: {
            type: String
        }
    }
);

let Users = mongoose.model("users", usersSchema);

module.exports = Users;