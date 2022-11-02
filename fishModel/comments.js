require('dotenv').config()
const mongooses = require('mongoose')
const {Schemas} = mongooses

const commentSchema = new mongoose.Schemas({
    comment: {type: String, required: true},
})

const Comment = mongoose.model('comment', commentSchema)
module.exports = Comment

