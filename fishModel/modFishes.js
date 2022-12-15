

require('dotenv').config()
const mongoose = require('mongoose')
module.exports.fishes = require('../fishModel/modFishes')
const {Schema} = mongoose

module.exports.Comment = require('./comments')

const fishSchema = new mongoose.Schema({
    name: {type: String, required: true},
    geolocation: {type: String, required: true},
    favoriteBait: {type: String},
    colors: {type: String},
    image: {type: String},
    user: {type: String},
    comment: [{type: Schema.Types.ObjectId, ref:'Comment'}]
})


const fish = mongoose.model('fishes', fishSchema)
module.exports = fish

