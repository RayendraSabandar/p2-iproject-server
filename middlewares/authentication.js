const { checkToken } = require('../helpers/jwt')

async function authentication(req, res, next){ 
    const { access_token } = req.headers
    try {
        const payload = checkToken(access_token)
        req.user_id = payload.id
        next()
    } catch (err) {
        if(err.message === 'jwt must be provided'){
            res.status(400).json({ message : 'No JWT is provided'})
        }
        else if(err.message === 'invalid token'){
            res.status(401).json({message : 'You are not authorized for this command'})
        }
    }
}

module.exports = { authentication }