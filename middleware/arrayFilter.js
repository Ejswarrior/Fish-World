require('dotenv').config()

function arrayFilterUsername(user){
    user.filter((item) => {
        if(item.username == username) return item
    })
    
}

function arrayFilterEmail(user){
    user.filter((item) => {
        if(item.email == email) return item
    })
    
}

module.exports = {arrayFilterUsername, arrayFilterEmail}