// Configuration to be able to use .env files
require('dotenv').config()

// Import model
const User = require('../modules/usersModel')

const express = require('express')
const app = express()
const router = express.Router()

// Bcrypt for password check
const bcrypt = require('bcryptjs')


// Token
const jwt = require('jsonwebtoken')

// cookies
const cookieParser = require('cookie-parser')
app.use(cookieParser())

router.post('/api/auth/', async (req, res) => {


    //Letar bara upp User via email.
    const user = await User.findOne({
        email: req.body.email
    })


    if (user) {

        console.log(user)
        console.log(req.body.password)


        //Jämför hashade req.password mot det du skriver in i Insomnia. 
        bcrypt.compare(req.body.password, user.password, function (err, result) {
            if (err) res.json(err)

            //om resultatet inte är false, signa och skicka token. 
            if (result !== false) {
                console.log(result)
                const payload = user.role

                const token = jwt.sign(payload, `${process.env.SECRET}`)
                res.cookie('auth-token', token)
                res.send({
                            token: token,
                            user
                        })
            } else {
                res.send('Fel lösen eller email')
            }
        })

    }


})


module.exports = router