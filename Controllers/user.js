const { checkPassword } = require('../helpers/bcrypt')
const { signToken } = require('../helpers/jwt')
const { User } = require('../models')

class UserController {
    static async register(req, res){
        const { username, email, password } = req.body
        try {
            const user = await User.create({
                username, email, password
            })
            res.status(201).json({
                id : user.id,
                email : user.email
            })
        } catch (err) {
            const validationErrors = err.errors.map(err => {
                return err.message
            })
            res.status(400).json({message: validationErrors})
        }
    }

    static async login(req, res){
        const { email, password } = req.body
        const incorrectCredentials = {
            code : 403,
            message : 'Incorrect Email/Password'
        }
        try {
            const user = await User.findOne({
                where : {
                    email
                }
            })
            if(user){
                const check = checkPassword(password, user.password)
                if(check){
                    const payload = {
                        id : user.id,
                        email : user.email
                    }
                    const access_token = signToken(payload)
                    res.status(200).json({access_token, email: payload.email, id: payload.id})
                } else {
                    throw(incorrectCredentials)
                }
            } else {
                throw(incorrectCredentials)
            }
        } catch (err) {
            res.status(err.code).json({message : err.message})
        }
    }
}

module.exports = UserController