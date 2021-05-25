const express = require('express')
const router = express.Router();
const Products = require('../modules/productsModel');
const mongoose = require('mongoose');
const db = mongoose.connection


router.get('/api/products', (req, res) => {
    var Products = mongoose.model('products');
    Products.find({}, function(err, data) {res.send(data); console.log(err, data, data.length); });
})

router.post('/api/products', (req, res) => {
    var Products = mongoose.model('products');
    Products.collection.insert({}, function(err, data) {res.send(data); console.log(err, data, data.length); });
})

router.delete('/api/products/:_id', (req, res, next) => {
    var Products = mongoose.model('products');
    Products.collection.deleteOne({ _id: String }, function(err, data) {res.send(data); console.log(err, data, data.length); });
})

module.exports = router