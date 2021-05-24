// Configuration to be able to use .env files
require('dotenv').config()

// Token
const jwt = require('jsonwebtoken')

const createToken = (parameter) =>{

    
    const token = jwt.sign(payload, `${process.env.SECRET}`)
    return token
}

module.exports = createToken