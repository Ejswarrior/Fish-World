const router = require('express').Router()
const Users = require('../fishModel/users')
const Login = require('../fishModel/login')
const session = require('express-session')

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

router.get('/profile/:id', async (req, res) => {
    if(req.session.Users){
    console.log(req.session.Users)
    let findUsers = await Users.findById(req.params.id)
    res.render('profile', {findUsers})
    }
    else{
        res.redirect('/users/login')
    }
})

router.post('/login/check', async (req, res) =>{
    let userEntry = await Login.create(req.body)
    let userAuthentification = await Users.find()
    
    let mapCheck = userAuthentification.map((item) => {
        if(userEntry.username == item.username && userEntry.password == item.password){
            return item.id
        }
    })
    try{
        let userFind = await Users.findById(mapCheck)
        let authDelete = await Login.deleteMany({})
        mapCheck.length = 0
        req.session.Users = userFind
        res.redirect(`/user/profile/${userFind.id}`)
        
    }

    catch(err){
        mapCheck.length = 0
        req.flash('error', "Enter in the correct Username and Password")
        res.redirect('/user/login')
    }
})
   
    
router.post('/profile', async (req,res) => {
    let createUsers = await Users.create(req.body)
    console.log(createUsers)
    res.redirect(`profile/${createUsers.id}`)
})






module.exports = router