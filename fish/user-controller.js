const router = require('express').Router()

router.get('/', (req,res) => {

    res.send('hello')
})

router.get('/login', (req, res) =>{
    res.render('login')
})

router.get('/create/account', (req,res) =>{
    res.render('create-account')
})

module.exports = router