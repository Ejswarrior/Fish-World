const router = require('express').Router()
const fishes = require('../fishModel/modFishes')
const fishe = require('../fishModel/fishes')
const comments = require('../fishModel/comments')
const session = require('express-session')


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

router.get('/:id', (req,res) => {
    fishes.findById(req.params.id)
    .populate('comment')
    .then(fish => {
        console.log(fishes.comment)
        res.render('Show', {fish})
    })
    
})

router.post('/:id', (req, res) => {
        fishes.findById(req.params.id)
        .populate('comment')
        .then(fish => {
            comments.create(req.body)
            .then(commentz => {
                fish.comment.push(commentz.id)
                fish.save()
                .then(() => {
                res.redirect(`/fish/${req.params.id}`)
                })
            })
        })

})


router.post('/', (req, res) =>{
        fishes.create(req.body)
        .then((fish) => {
        res.redirect(`Show`, {fish})
        })

})



module.exports = router