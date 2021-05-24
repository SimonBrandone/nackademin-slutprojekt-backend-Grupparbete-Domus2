const productsFile = require('../assets/products.json');
const express = require('express')
const products = express.Router();

<<<<<<< Updated upstream
products.get('/api/products', (req, res) => {
    res.json(productsFile)
=======

router.get('/api/products', (req, res) => {
    var Products = mongoose.model('products');
    console.log("hej")
    Products.find({}, function(err, data) {res.send(data); console.log(err, data, data.length); });
>>>>>>> Stashed changes
})



module.exports = products