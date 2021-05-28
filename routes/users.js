const express = require('express')
const router = express.Router()
// Import model
const User = require('../modules/usersModel')
 
// Hashing/crypting for password
const bcrypt = require('bcryptjs')

// A Route to be able to register a user and save it to the database.
router.post('/api/register', async (req, res) => {

    //Hashing for the password 
    const salt = await bcrypt.genSalt(10)
    const hashPassword = await bcrypt.hash(req.body.password, salt)

    let newUser = await new User({
        email: req.body.email,
        password: hashPassword,
        name: req.body.name,
        // The default value is "customer" and if u want to register an admin u hardcode that into postman for example.
        adress: {
            street: req.body.street,
            zip: req.body.zip,
            city: req.body.city
        }
    })

    try {
        newUser.save((err) => {
            if (err) {
                res.json(err)
            }
            const payload = {
                _id: user._id,
                role: user.role
            }

            // denna metod ger oss en token, den behöver en payload och ett lösenord som vi gömt i vår env fil.
            const token = jwt.sign(payload, `${process.env.SECRET}`)
            res.cookie('auth-token', token)
            res.json({
                token: token,
                user: {
                    name: user.name,
                    role: user.role,
                    email: user.email,
                    adress: {
                        street: user.street,
                        zip: user.zip,
                        city: user.city
                    }
                }
            })
        }
            
        );
       
    }
     catch (error) {
        res.send('Något gick fel när du försökte spara en ny användare')
    }
})

module.exports = router
