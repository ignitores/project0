const mongoose = require('mongoose');

let Schema = mongoose.Schema;

let cakeSchema = new Schema(
    {
        name: {
            type: String,
        },
        description: {
            type: String,
        },
        sizeAndPrice: {
            type: Object,
            default: {}
        },
        flavour: {
            type: String,
        },
        images: {
            type: Array,
            default: [],
        },
        totalOrders: {
            type: Number,
        },
        totalNoOfReviews: {
            type: Number
        },
        sumOfReviews: {
            type: Number,
        },
        tags: {
            type: Array,
            default: [],
        }
    }
);

let Cakes = mongoose.model("cakes", cakeSchema);

module.exports = Cakes;