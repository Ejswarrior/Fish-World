// module.exports = [{
//     name: 'Lake trout',
//     geolocation: 'North Hemisphere',
//     favBait: 'jig',
//     colors: 'Grey top/White Belly',
//     image: '/laketrout.jpg',
//     comment: ''
// }]

require('dotenv').config()
const mongoose = require('mongoose')
module.exports.fishes = require('../fishModel/modFishes')
const {Schema} = mongoose

const fishSchema = new mongoose.Schema({
    name: {type: String, required: true},
    geolocation: {type: String, required: true},
    favoriteBait: {type: String},
    colors: {type: String},
    image: {type: String}
})

const commentSchema = new mongoose.Schema({
    comment: {type: String, required: true},
})

const Comment = mongoose.model('comment', commentSchema)
const fish = mongoose.model('fishes', fishSchema)

module.exports = fish
module.exports = Comment
