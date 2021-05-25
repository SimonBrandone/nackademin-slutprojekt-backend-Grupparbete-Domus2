const mongoose = require('mongoose');
var Schema = mongoose.Schema;

const Orders = mongoose.model('orders', 
               new Schema({}), 
               'orders');

module.exports = Orders