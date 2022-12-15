const router = require('express').Router()
const fishes = require('../fishModel/modFishes')
const comments = require('../fishModel/comments')
const User = require('../fishModel/users')
const session = require('express-session')
const cookieParser = require('cookie-parser')

router.get('/fishrefresh', async (req,res) => {
    let fish = await fishes.find()
    res.json(fish)
})

router.get('/', async (req,res) =>{
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

router.get('/:id', async (req,res) => {
    let fishFound = await fishes.findById(req.params.id).populate('comment')
    res.render('Show', {fishFound})
    
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


router.post('/', async(req, res) =>{
        const userAccess = req.cookies['user-access']

        if(!userAccess){
            return res.status(401).json('You are not logged in')
        }
        const {name, geolocation, favoriteBait, colors, image, comment, id} = req.body
        let user = await User.findById(userAccess._id).populate('posts')
        let fishPost = await fishes.create({
            id: id, 
            name: name,
            geolocation: geolocation,
            favoriteBait: favoriteBait,
            colors: colors,
            image: image,
            comment: comment,
            user: userAccess.username
        })
        console.log(user)
        await user.posts.push(fishPost.id)
        user.save()
        
        await res.redirect(`/fish/${fishPost.id}`)
    
})



module.exports = router