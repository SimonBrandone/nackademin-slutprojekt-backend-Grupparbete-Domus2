const express = require('express')
const router = express.Router();
const Product = require('../modules/productsModel');
const User = require('../modules/usersModel');
const mongoose = require('mongoose');
const db = mongoose.connection
const User = require('../modules/usersModel');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs')
require('dotenv').config()


// Token
const jwt = require('jsonwebtoken')

let userid = '';

const verifyToken = (req, res, next) => {
    const token = req.cookies['auth-token'];

    if (token) {
        jwt.verify(token, `${process.env.SECRET}`, (err, decodedPayload) => {
            if (err) {
                res.send(err)
            } else {
const verifyToken = (req, res, next) =>{

    const token = req.headers.authorization.split(' ')[1];
    
    console.log(token)

    if (token){
        jwt.verify(token, `${process.env.SECRET}`, (err, decodedPayload) =>{
            if(err){
                res.send(err)
            }else{

                userid = decodedPayload._id;
                next();
            }
        })

    } else {
        res.send('token not true')
    }
}


//Hitta produkter i databasen
router.get('/api/products', (req, res) => {
    Product.find({}, function (err, data) { res.json(data); console.log(err, data); });

    }else{
        res.send('token not true')
    }
} 

router.get('/api/products', async(req, res) => {
    Product.find({}, function(err, data) {res.json(data); console.log(err, data); });

})

//Skapa ny produkt
router.post('/api/products', (req, res) => {
    let newProduct = new Product({
        _id: req.body.id,
        title: req.body.title,
        price: req.body.price,
        shortDesc: req.body.shortDesc,
        longDesc: req.body.longDesc,
        _id: new mongoose.Types.ObjectId(),
        imgFile: req.body.imgFile
    })
    try {
        newProduct.save()
        res.json({ product: newProduct })
    } catch (err) {
        res.send(err)
    }
})

//Hitta produkt baserat på id
router.get('/api/products/:id', (req, res) => {
    const id = req.params.id
    Product.collection.findOne({ _id: id }, function (err, data) { res.send(data); console.log(err, data); });
})

//Tar bort produkt

router.delete('/api/products/:id', async (req, res) => {
    userid = jwt.verify(req.cookies['auth-token'], process.env.SECRET);
    console.log(userid)
    const productid = req.params.id
    const user = await User.findById(userid._id)
    console.log(user.role);
    if (user.role === 'admin') {

        Product.collection.deleteOne({ _id: productid });
        res.send('product succefully removed!')
    } else {
        res.send('not authorized')
    }
router.delete('/api/products/:id', verifyToken, async (req, res) => {
    const id = req.params.id
    Product.collection.deleteOne({ _id : id }, function(err, data) {res.send(data); console.log(err, data); });

})

//Ändrar produkt
router.patch('/api/products/:id', (req, res) => {
    const id = req.params.id

    var newValues = {
        $set: {
            title: req.body.title,
            price: req.body.price,
            shortDesc: req.body.shortDesc,
            longDesc: req.body.longDesc,
            imgFile: req.body.imgFile
        }
    }
    Product.updateOne({ _id: id }, newValues, function (err, newValues) { res.json(newValues); console.log(err, newValues); })

})

module.exports = router