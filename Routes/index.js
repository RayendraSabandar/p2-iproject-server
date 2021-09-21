const router = require('express').Router()
const UserRoutes = require('./user')
const CocktailController = require('./cocktail')
const TagController = require('./tag')

router.get('/', (req, res) => {
    res.send(`handling "/"`)
})

router.use('/users', UserRoutes)
router.use('/cocktails', CocktailController)
router.use('/tags', TagController)

module.exports = router