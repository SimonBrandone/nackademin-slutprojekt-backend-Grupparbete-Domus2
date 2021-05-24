const productsFile = require('../assets/products.json');
const express = require('express')
const products = express.Router();


router.get('/api/products', (req, res) => {
    var Products = mongoose.model('products');
    console.log("hej")
    Products.find({}, function(err, data) {res.send(data); console.log(err, data, data.length); });
})



module.exports = products