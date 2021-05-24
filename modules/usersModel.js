const mongoose = require('mongoose')

const userSchema = mongoose.Schema({
    email: String,
    password: {
        type: String,
        required: true
    },
    // repeatPassword: {
    //     type: String,
    //     required: true
    // },
    name: String,
    role: {
        type: String,
        default: 'customer'
    },
    adress: {
        street: String,
        zip: String,
        city: String
    },
    orderHistory: [{
        type: mongoose.Schema.Types.Array,
        ref: 'Order'
    }]
})

const User = mongoose.model('User', userSchema)

module.exports = User