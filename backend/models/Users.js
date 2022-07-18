const mongoose = require('mongoose')

let Schema = mongoose.Schema;

let UsersSchema = new Schema(
    {
        email: {
            type: String,
        },
        passwprd: {
            type: String,
        },
    }
);

let Users = mongoose.model("users", UsersSchema);

models.export = Users;