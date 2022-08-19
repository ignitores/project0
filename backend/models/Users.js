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
        username: {
            type: String
        },
        email: {
            type: String,
        },
        mobnumber: {
            type: Number,
        }
    }
);

let Users = mongoose.model("users", usersSchema);

module.exports = Users;