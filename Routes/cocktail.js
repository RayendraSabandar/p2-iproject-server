const CocktailController = require('../Controllers/cocktail')
const router = require('express').Router()

router.post('/searchByName/:name', CocktailController.searchByName)
router.post('/searchById/:id', CocktailController.searchById)
router.post('/search/:category', CocktailController.searchByCategory)
router.post('/add/:cocktailId', CocktailController.add)

module.exports = router