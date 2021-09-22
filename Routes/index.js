const router = require('express').Router()
const UserRoutes = require('./user')
const CocktailController = require('./cocktail')
const TagController = require('./tag')
const { authentication } = require('../middlewares/authentication')

router.get('/', (req, res) => {
    res.send(`handling "/"`)
})

router.use('/users', UserRoutes)

router.use(authentication)

router.use('/cocktails', CocktailController)
router.use('/tags', TagController)

module.exports = router