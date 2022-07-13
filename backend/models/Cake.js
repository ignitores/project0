const mongoose = require('mongoose');

let Schema = mongoose.Schema;

let cakeSchema = new Schema(
    {
        name: {
            type: String,
            default: ""
        },
        description: {
            type: Object,
            default: {}
        },
        sizeAndPrice: {
            type: Object,
            default: {}
        },
        flavour: {
            type: Array,
            default: []
        },
        images: {
            type: Array,
            default: [],
        },
        totalOrders: {
            type: Number,
            default: 0
        },
        totalNoOfReviews: {
            type: Number,
            default: 0
        },
        sumOfReviews: {
            type: Number,
            default: 0
        },
        tags: {
            type: Array,
            default: [],
        },
        createdAt: {
            type: Date,
            default: new Date()
        }
    },
    { timestamps: true }
);

let Cakes = mongoose.model("cakes", cakeSchema);

module.exports = Cakes;