const mongoose = require('mongoose');
var Schema = mongoose.Schema;

const Product = mongoose.model('products', 
               new Schema({ _id: String, 
                title: String,
                price: Number,
                shortDesc: String,
                longDesc: String,
                imgFile: String,
             }), 
               'products');

module.exports = Product
