<<<<<<< Updated upstream
=======
const mongoose = require('mongoose');
var Schema = mongoose.Schema;

const Products = mongoose.model('products', 
               new Schema({ id: Number }), 
               'products');

module.exports = Products
>>>>>>> Stashed changes
