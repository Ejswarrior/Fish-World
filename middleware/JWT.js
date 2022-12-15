require('dotenv').config()
const {sign, verify} = require('jsonwebtoken')
const Token = require('../fishModel/token')

function createToken(user) {
    const accessToken = sign({username: user.username}, process.env.ACCESS_TOKEN_SECRET, {expiresIn: "45s"})
    return accessToken;
}

function refreshToken(user){
    const refreshToken = sign(user, process.env.REFRESH_TOKEN_SECRET)
    return refreshToken;
}

async function verifyToken(req, res, next){
    const accessToken = req.cookies["access-token"]
    console.log(accessToken)
    if(!accessToken) return res.status(400).json({error: 'Unauthorized'})
    try{
        const validToken = verify(accessToken, process.env.ACCESS_TOKEN_SECRET)
        console.log(validToken)
            if(validToken){
                req.authenticated = true
                return next()
            }
    } 
    catch(err){
        console.log(err)
        return res.status(403).json({error: "Help me"})
    }
}


module.exports = {createToken, verifyToken}