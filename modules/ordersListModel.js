const mongoose = require('mongoose');
var Schema = mongoose.Schema;

const OrdersList = mongoose.model('orders', 
               new Schema({}), 
               'orders');

module.exports = OrdersList