const mongoose = require('mongoose');
var Schema = mongoose.Schema;

const Product = mongoose.model('products', 
               new Schema({
                title: String,
                price: Number,
                shortDesc: String,
                longDesc: String,
                imgFile: String,
             }), 
               'products');

module.exports = Product


/* const orderSchema = mongoose.Schema({
  _id: String,
  title: {
      type: String,
  },
  price: {
      type: Number,
  },
  items: {
      type: mongoose.Schema.Types.Array,
      ref: 'Products'
  },
  orderValue: Number
},

) */

// const Order = mongoose.model('Order', orderSchema)

// module.exports = Order