const CocktailController = require('../Controllers/cocktail')
const { authentication } = require('../middlewares/authentication')
const router = require('express').Router()

router.get('/searchByName/:name', CocktailController.searchByName)
router.get('/searchById/:id', CocktailController.searchById)
router.get('/searchByIngredient/:ingredient', CocktailController.searchByIngredient)
router.get('/filterByType/:type', CocktailController.filterByType)
router.get('/filterByGlass/:glass', CocktailController.filterByGlass)
router.get('/filterByCategory/:category', CocktailController.filterByCategory)
router.post('/add/:cocktailId', CocktailController.add)

module.exports = router