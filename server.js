require('dotenv').config()
const express = require('express')
const mongoose = require('mongoose')
const app = express()

app.set('views', __dirname + '/views')
app.set('view engine', 'jsx')
app.engine('jsx', require('express-react-views').createEngine())
app.use(express.static('public'))
app.use(express.urlencoded({ extended: true }))

app.get('/', (req, res) => {

res.send('<h1>Hello</h1>')
})

app.use('/fish', require('./fish/fish'))
app.use('/user', require('./fish/user-controller'))

mongoose.connect(process.env.MONGO_URI, {useNewUrlParser: true, useUnifiedTopology: true},
    () => {console.log(process.env.MONGO_URI)})

    
app.listen(process.env.PORT)