const mongoose = require('mongoose');
var Schema = mongoose.Schema;

const Products = mongoose.model('products', 
               new Schema({ _id: String, 
                title: String,
                price: String,
                shortDesc: String,
                longDesc: String,
                imgFile: String,
             }), 
               'products');

module.exports = Products
