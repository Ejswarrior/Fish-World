const router = require('express').Router()

const Users = require('../fishModel/users')
const Login = require('../fishModel/login')
const Token = require('../fishModel/token')
const Fish = require('../fishModel/modFishes')


const session = require('express-session')
const cookieParser = require('cookie-parser')
const jwt = require('jsonwebtoken')
const bcrypt = require('bcrypt')

const {createToken, verifyToken} = require('../middleware/JWT')
const {arrayFilterUsername, arrayFilterEmail} = require('../middleware/arrayFilter')



router.get('/', (req,res) => {
    res.send('hello')
})

router.get('/login', (req, res) =>{
    let userAccess = req.cookies["user-access"]
        
        let users = Users.find()
        res.render('login')
    })

router.get('/create/account', (req,res) =>{
    res.render('create-account')
})


router.post('/login/check', async (req, res) =>{

    const {username, password} = req.body
    let userAuthentification = await Users.findOne({where: {username: username}})
    const dbPassword = userAuthentification.password
    let passwordCompare = await bcrypt.compare(password,dbPassword)
    const userId = userAuthentification.id
    if(passwordCompare == false){
        req.flash('error', "Enter in the correct Username and Password")
        res.redirect('/user/login')
    }

        try{
        const accessToken = createToken(userAuthentification)
        console.log(accessToken)
        res.cookie("access-token", accessToken, {
            maxAge: 60*60*24*2*1000,
            httpOnly: true
        });
        res.cookie("user-access", userAuthentification,{
            maxAge: 60*60*24*2*1000,
            httpOnly: true
        })
        res.redirect(`/user/profile/${userAuthentification.id}`)
    } 
    catch(err){
        res.status(400).json('Invalid credientials')
    }

    //if we catch an error we will use flash to send an error message and put the user back to the login page
})



router.get('/profile/:id', verifyToken, async (req, res) => {
    let userAccess = res.cookie["user-access"]
    let findUsers = await Users.findById(req.params.id).populate('posts')
    res.render('profile', {findUsers})
    })

    
router.post('/profile', async (req,res) => {
    const {name, email, username, password, posts} = req.body
    const hash = await bcrypt.hash(password, 10)
    let findUsers = await Users.find()

    // let duplicateUsername = arrayFilterUsername(findUsers)
    // let duplicateEmail = arrayFilterEmail(findUsers)

    let duplicateUsername = findUsers.filter((item) => {
        if(item.username == username) return item
    })
    let duplicateEmail = findUsers.filter((item) => {
        if(item.email == email) return item
    })
    


    if(duplicateUsername.length == 0 && duplicateEmail.length == 0){
        let createUsers = await Users.create({
            name: name,
            email: email,
            username: username,
            password: hash,
            posts: posts
        })
            try{
            res.redirect(`/user/login`)
            }
                catch(err){
                    res.status(400).json({error: err})
                }
    } 
    else if(duplicateUsername != 0 && duplicateEmail.length == 0){
        res.status(400).json('That Username already exists')
    }
    else if(duplicateUsername == 0 && duplicateEmail.length != 0){
        res.status(400).json('That Email already exists')
    }

    else{
        res.status(400).json('Username and email is already in use')
    }
    
})
router.get('/logout', (req,res) => {
    res.render('logout')
})

router.post('/logout/check', async (req, res) => {
    res.clearCookie("user-access")
    res.clearCookie("access-token")
    res.json("Logged out")
})



module.exports = router