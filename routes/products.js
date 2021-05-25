const express = require('express')
const router = express.Router();
const Product = require('../modules/productsModel');
const mongoose = require('mongoose');
const db = mongoose.connection

//Hämta produkter, fungerar
router.get('/api/products', (req, res) => {
    Product.find({}, function(err, data) {res.json(data); console.log(err, data, data.length); });
})

//Lägga till produkt. Fungerar
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


//För att ta bort en. Funkar inte riktigt, kan deleta annat än det man klickar på.
router.delete('/api/products/:_id', (req, res, next) => {
    Product.collection.deleteOne({}, function(err, data) {res.send(data); console.log(err, data, data.length); });
})

//för att uppdatera en order. Samma sak som med delete. ändrar inte den man klickar på alltid.
router.patch('/api/products/:_id', (req, res, next) => {

})
module.exports = router