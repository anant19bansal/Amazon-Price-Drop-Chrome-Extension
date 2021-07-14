const mongoose = require('mongoose');

const productSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        unique: true
    },
    itemId: {
        type: String,
        required: true,
    },
    price: {
        type: Number,
        required: true
    },
    link: {
        type:String,
        required: true
    }
},{
    timestamps: true,
});

const Product = mongoose.model('Product', productSchema);
module.exports = Product;