const express = require('express');

const router = express.Router();

const productController = require('../controllers/productController');
//routing to the product controlers
router.get('/products', productController.getAllProducts);
router.get('/products/:id', productController.getProductById);
router.post('/products', productController.addProduct);
router.put('/products/:id', productController.updateProduct);
router.delete('/products/:id', productController.deleteProduct);
router.delete('/products', productController.deleteAllProducts);

module.exports = router;
