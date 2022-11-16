require('dotenv').config()
const express = require('express')
const mongoose = require('mongoose')
const session = require('express-session')
const flash = require('connect-flash');
const jwt = require('jsonwebtoken')
const cookieParser = require('cookie-parser')
const bcrypt = require('bcrypt')
const app = express()


//Middleware

//Created a session to use flash to send messages during redirects
app.use(session({
    secret: 'webslesson',
    cookie: {maxAge : 60000},
    saveUninitialized : false,
    resave: false,
}))

app.use(flash())
app.set('views', __dirname + '/views')
app.set('view engine', 'jsx')
app.engine('jsx', require('express-react-views').createEngine())
app.use(express.static('public'))
app.use(express.urlencoded({ extended: true }))
app.use(express.json())
app.use(cookieParser())

app.get('/', (req, res) => {
res.send('<h1>Hello</h1>')
})



app.use('/fish', require('./fish/fish'))
app.use('/user', require('./fish/user-controller'))

app.get('*', (req, res) => {
    res.send('Error 404')
})


mongoose.connect(process.env.MONGO_URI, {useNewUrlParser: true, useUnifiedTopology: true},
    () => {console.log(process.env.MONGO_URI)})

    
app.listen(process.env.PORT)