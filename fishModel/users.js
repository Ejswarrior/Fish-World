require('dotenv').config()
const mongoose = require('mongoose')
const {Schema} = mongoose

module.exports.fish = require("./modFishes")

const userSchema = new Schema({
name:{type: String, required: true},
email:{type: String, required: true},
username:{ type: String, required: true},
password:{ type: String, required: true},
posts: [{type: Schema.Types.ObjectId, ref:'fishes'}]
})

const Users = mongoose.model('Users', userSchema)
module.exports = Users