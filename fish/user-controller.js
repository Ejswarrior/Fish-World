const router = require('express').Router()

const Users = require('../fishModel/users')
const Login = require('../fishModel/login')
const Token = require('../fishModel/token')

const session = require('express-session')
const cookieParser = require('cookie-parser')
const jwt = require('jsonwebtoken')
const bcrypt = require('bcrypt')

const {createToken, verifyToken} = require('../middleware/JWT')



router.get('/', (req,res) => {

    res.send('hello')
})

router.get('/login', (req, res) =>{
    let users = Users.find()
    res.render('login', {messages: req.flash('error')})
})

router.get('/create/account', (req,res) =>{
    res.render('create-account')
})


router.post('/login/check', async (req, res) =>{

    const {username, password} = req.body
    let userAuthentification = await Users.findOne({where: {username: username}})
    const dbPassword = userAuthentification.password
    let passwordCompare = await bcrypt.compare(password,dbPassword)

    if(passwordCompare == false){
        req.flash('error', "Enter in the correct Username and Password")
        res.redirect('/user/login')
    }

    else{
        const accessToken = createToken(userAuthentification)
        res.cookie("access-token", accessToken, {
            maxAge: 60*60*24*2*1000,
            httpOnly: true
        });

        res.redirect(`/user/profile/${userAuthentification.id}`)
        
    }
    //if we catch an error we will use flash to send an error message and put the user back to the login page
})



router.get('/profile/:id', verifyToken, async (req, res) => {
    let findUsers = await Users.findById(req.params.id)
    return res.render('profile', {findUsers})
    })

    
router.post('/profile', async (req,res) => {
    const {name, email, username, password} = req.body
    const hash = await bcrypt.hash(password, 10)
    let findUsers = await Users.findOne({where: {username: username}})

    if(findUsers.username = username){
    let createUsers = await Users.create({
        name: name,
        email: email,
        username: username,
        password: hash
    })
    try{
    res.redirect(`/user/login`)
    }
    catch(err){
        res.status(400).json({error: err})
    }
} else{
    res.status(400).json('Already and account')
}
})




module.exports = router