const router = require('express').Router()
const Users = require('../fishModel/users')
const Login = require('../fishModel/login')
const session = require('express-session')

router.get('/', (req,res) => {

    res.send('hello')
})

router.get('/login', (req, res) =>{
    let users = Users.find()
    res.render('login', {users})
})

router.get('/create/account', (req,res) =>{
    res.render('create-account')
})

router.get('/profile/:id', async (req, res) => {
    let findUsers = await Users.findById(req.params.id)
    console.log(findUsers)
    res.render('profile', {findUsers})
})

router.post('/login/check', async (req, res) =>{
    let userEntry = await Login.create(req.body)
    let userCount = await Login.find()
    let userAuthentification = await Users.find()
    console.log(`first:${userCount}`)
        if(userEntry.username == userAuthentification.username && userEntry.password == userAuthentification.password){
           
            let userFound = await Users.findById(req.params.id)
            res.redirect(`profile/${userFound.id}`)
        }
        else if(userEntry.username != userAuthentification.username && userEntry.password != userAuthentification.password){
            res.redirect(`/user/login`)
        }
})

router.post('/profile', async (req,res) => {
    let createUsers = await Users.create(req.body)
    console.log(createUsers)
    res.redirect(`profile/${createUsers.id}`)
})






module.exports = router