const express = require('express')
const router = express.Router();
const Order = require('../modules/ordersModel');
const mongoose = require('mongoose');




router.post('/api/orders', async (req, res) => {

    // Skapar nu order enligt orderSchema. 
    let newOrder = new Order({
        status: req.body.status,
        timestamp: new Date(),
        items: req.body.items,
        _id: new mongoose.Types.ObjectId(),
        orderValue: req.body.items.price
    })
    // Försöker spara, Order create tillbaka om det fungerar. 
    // Ska till mer validering nu. 
    try {
        //Sparas till databasen
        newOrder.save()
        res.send('Order Created')
        res.json('order created')
    } catch (err) {
        // Om det blir fel.
        res.send(err)
    }

})



module.exports = router