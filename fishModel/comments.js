require('dotenv').config
const mongoose = require('mongoose')
const {Schema} = mongoose

const commentSchema = new mongoose.Schema({
    comment: {type: String}
})

const Comment = mongoose.model('Comment', commentSchema)
module.exports = Comment