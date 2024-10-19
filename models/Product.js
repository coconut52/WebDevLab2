const mongoose = require('mongoose');

//product info
const productSchema = new mongoose.Schema({
    name: { type: String, required: true },
    description: { type: String, required: true },
    price: { type: Number, required: true },
    quantity: { type: Number, required: true },
    category: { type: String, required: true },
});
//sends schema to database
module.exports = mongoose.model('Product', productSchema);
