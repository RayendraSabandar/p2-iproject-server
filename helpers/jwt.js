const jwt = require('jsonwebtoken')
const JWT_SECRET = process.env.JWT_SECRET

function signToken(payload){
    return jwt.sign(payload, JWT_SECRET)
}

function checkToken(access_token){
    return jwt.verify(access_token, JWT_SECRET)
}

module.exports = { signToken, checkToken }