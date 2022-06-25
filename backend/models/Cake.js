import mongoose from 'mongoose';

let Schema = mongoose.Schema;

let cakeSchema = new Schema(
    {
        name: {
            type: String,
        },
        description: {
            type: String,
        },
        price: {
            type: Number,
        },
        category: {
            type: String,
        },
    }
);

export let Cakes = mongoose.model("cakes",cakeSchema);

// module.exports = Cakes;