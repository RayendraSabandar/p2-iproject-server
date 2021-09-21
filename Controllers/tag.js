const { Tag, Cocktail } = require('../models')

class TagController{
    static async findAll(req, res){
        const UserId = req.user_id
        try {
            const tag = await Tag.findAll({
                where : {
                    UserId
                },
                attributes : {
                    exclude : ['createdAt', 'updatedAt']
                }
            })
            res.status(200).json(tag)
        } catch (err) {
            res.status(500).json(err)
        }
    }

    static async findByName(req, res){
        const { name } = req.params
        const UserId = req.user_id
        try {
            const tag = await Tag.findAll({
                where : {
                    UserId,
                    name

                },
                include : {
                    model : Cocktail,
                    attributes : {
                        exclude : ['createdAt', 'updatedAt']
                    }
                },
                attributes : {
                    exclude : ['createdAt', 'updatedAt']
                }
            })
            res.status(200).json(tag)
        } catch (err) {
            res.status(500).json(err)
        }
    }

    static async add(req, res){
        const UserId = req.user_id
        const { name } = req.body
        try {
            const tag = await Tag.create({
                UserId,
                name
            })
            res.status(201).json({
                message : `Tag ${tag.name} has been succesfully created`
            })
        } catch (err) {
            res.status(500).json(err)
        }
    }
}

module.exports = TagController