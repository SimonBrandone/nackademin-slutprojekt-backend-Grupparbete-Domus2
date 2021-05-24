const express = require('express')
const router = express.Router();
const Products = require('../modules/productsModel');
const mongoose = require('mongoose');
const db = mongoose.connection


router.get('/api/products', (req, res) => {
    var Products = mongoose.model('products');
    Products.find({}, function(err, data) {res.send(data); console.log(err, data, data.length); });
})

module.exports = router