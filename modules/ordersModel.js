const mongoose = require('mongoose');



const orderSchema = mongoose.Schema({
    _id: String,
    status: {
        type: String,
        default: 'In process'
    },
    timestamps: {
        type: Date,
        default: Date.now
    },
    items: {
        type: mongoose.Schema.Types.Array,
        ref: 'Products'
    },
    orderValue: Number
},

)

const Order = mongoose.model('Order', orderSchema)

module.exports = Order

// { timestamps: true}