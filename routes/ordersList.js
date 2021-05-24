const express = require('express')
const router = express.Router();
const OrdersList = require('../modules/ordersListModel');
const mongoose = require('mongoose');
const db = mongoose.connection


router.get('/api/orders', (req, res) => {
    console.log("hej")
    var OrdersList = mongoose.model('orders');
    OrdersList.find({}, function(err, data) {res.send(data); console.log(err, data, data.length); });
})

module.exports = router