const mongoose = require('mongoose');

const productSchema = new mongoose.Schema({
    price: {
        type: Number,
        required: true
    },
    name: {
        type: String,
        required: true,
        unique: true
    },
    itemId: {
        type: String,
        required: true,
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