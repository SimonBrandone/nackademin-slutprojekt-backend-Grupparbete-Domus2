const express = require('express')
const router = express.Router();
const Product = require('../modules/productsModel');
const mongoose = require('mongoose');
const db = mongoose.connection


router.get('/api/products', (req, res) => {
    Product.find({}, function(err, data) {res.json(data); console.log(err, data, data.length); });
})

router.post('/api/products', (req, res) => {
    let newOrder = new Product({
        title: req.body.title,
        price: req.body.price,
        shortDesc: req.body.shortDesc,
        longDesc: req.body.longDesc,
        _id: new mongoose.Types.ObjectId(),
        imgFile: req.body.imgFile
    })
    try {
        newOrder.save()
        res.send('products')
    } catch (err) {
        res.send(err)
    }
})

router.delete('/api/products/:_id', (req, res, next) => {
    Product.collection.deleteOne({}, function(err, data) {res.send(data); console.log(err, data, data.length); });
})

router.patch('/api/products/:_id', (req, res, next) => {
    
})
module.exports = router