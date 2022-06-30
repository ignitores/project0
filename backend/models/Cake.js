const mongoose = require('mongoose');

let Schema = mongoose.Schema;

let cakeSchema = new Schema(
    {
        name: {
            type: String,
        },
        description: {
            type: Object,
			default:{}
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