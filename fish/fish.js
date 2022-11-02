const router = require('express').Router()
const fishes = require('../fishModel/modFishes')
const fishe = require('../fishModel/fishes')



router.get('/', (req,res) =>{
    fishes.find()
    .then((fish) => { 
        res.render('home' , {fish})
    })
})
router.get('/new', (req, res) => {
    fishes.find()
    .then(() => {
        res.render('new')
    })
    
})
router.post('/:id', (req,res) =>{
    fishes.create(req.body)
    .then((fish) => {
        res.redirect(`/fish`)
    })
    
})
router.get('/:id', (req,res) => {
    fishes.findById(req.params.id)
    .then(fish => {
        res.render('Show', {fish})
    })
    
})



router.post('/', (req, res) =>{

    fishes.create(req.body)
    .then((fish) => {
        fishes.findById(req.params.id)
        .then((fish) => {
        res.redirect(`show`, {fish})
        })
    })
    

})



module.exports = router