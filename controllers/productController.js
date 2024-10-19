const Product = require('../models/Product');
// Get all products
exports.getAllProducts = async (req, res) => {
    const products = await Product.find();
    res.status(200).json(products);
};

// Get product by id
exports.getProductById = async (req, res) => {
    const product = await Product.findById(req.params.id);
    if (!product) return res.status(404).json({ message: 'Product not found' });
    res.status(200).json(product);
};

// Add new product
exports.addProduct = async (req, res) => {
    const product = new Product(req.body);
    await product.save();
    res.status(201).json(product);
};
// update product by id
exports.updateProduct = async (req, res) => {
    const product = await Product.findByIdAndUpdate(req.params.id, req.body, { new: true });
    if (!product) return res.status(404).json({ message: 'Product not found' });
    res.status(200).json(product);
};

// remove product by id
exports.deleteProduct = async (req, res) => {
    const product = await Product.findByIdAndDelete(req.params.id); 
    if (!product) return res.status(404).json({ message: 'Product not found' });
    res.status(204).send();
};

// Remove all products
exports.deleteAllProducts = async (req, res) => {
    await Product.deleteMany({});
    res.status(204).send();
};
