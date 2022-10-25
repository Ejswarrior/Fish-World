const router = require('express').Router()
const fishes = require('../fishModel/modFishes')

router.get('/', (req,res) =>{
    res.render('home' , {fishes})
})

router.get('/new', (req, res) => {
    res.render('new')
})

router.post('/', (req, res) =>{
fishes.push(req.body)
res.redirect('/fish')
})

module.exports = router