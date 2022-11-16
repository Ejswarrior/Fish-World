require('dotenv').config()
const {sign, verify} = require('jsonwebtoken')

function createToken(user) {
    const accessToken = sign({username: user.username}, process.env.ACCESS_TOKEN_SECRET, {expiresIn: "45s"})
    return accessToken;
}

function verifyToken(req, res, next){
    const accessToken = req.cookies["access-token"]
    if(!accessToken) return res.status(400).json({error: 'Unauthorized'})
    try{
        const validToken = verify(accessToken, process.env.ACCESS_TOKEN_SECRET)
            if(validToken){
                req.authenticated = true
                return next()
            }
    } 
    catch(err){
        return res.status(403).json({error: err})
    }
}

module.exports = {createToken, verifyToken}