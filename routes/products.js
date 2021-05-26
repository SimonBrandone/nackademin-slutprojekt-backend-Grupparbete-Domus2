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
        _id: req.body.id,
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

router.get('/api/products/:id', (req, res) => {
    const id = req.params.id
    Product.collection.findOne({ _id : id }, function(err, data) {res.send(data); console.log(err, data, data.length); });
})

router.delete('/api/products/:id', async (req, res) => {
    const id = req.params.id
    Product.collection.deleteOne({ _id : id }, function(err, data) {res.send(data); console.log(err, data, data.length); });
})


router.patch('/api/products/:id', (req, res) => {
    const id = req.params.id

        var newValues = {
            $set:  {
        title: req.body.title,
        price: req.body.price,
        shortDesc: req.body.shortDesc,
        longDesc: req.body.longDesc,
        imgFile: req.body.imgFile
            }
    }
    Product.updateOne({ _id : id }, newValues, function(err, newValues) {res.json(newValues); console.log(err, newValues); })
    
})

module.exports = router