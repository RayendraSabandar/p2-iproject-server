const { Cocktail } = require('../models')
const axios = require('axios').default

class CocktailController {
    static async searchByName(req, res){
        const { name } = req.params
        try {
            const cocktails = await axios({
                method : 'get',
                url : `https://www.thecocktaildb.com/api/json/v1/1/search.php?s=${name}`,
            })
            res.status(200).json(cocktails.data.drinks)
        } catch (err) {
            res.status(500).json(err.name)
        }
    }

    static async searchById(req, res){
        const { id } = req.params
        try {
            const cocktail = await axios({
                method : 'get',
                url : `https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=${id}`,
            })
            res.status(200).json(cocktail.data.drinks[0])
        } catch (err) {
            res.status(500).json(err.name)
        }
    }

    static async searchByCategory(req, res){

    }

    static async add(req, res){
        const { cocktailId } = req.params
        const { tagid : TagId } = req.headers
            const cocktailAPI = await axios({
                method : 'get',
                url : `https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=${cocktailId}`,
            })
            try {
            const { 
                strDrink : name, 
                strVideo : video, 
                strCategory : category, 
                strAlcoholic : type, 
                strGlass : glass, 
                strInstructions : instruction,
                strDrinkThumb : image,
                strIngredient1,
                strIngredient2,
                strIngredient3,
                strIngredient4,
                strIngredient5,
                strIngredient6,
                strIngredient7,
                strIngredient8,
                strIngredient9,
                strIngredient10,
                strIngredient11,
                strIngredient12,
                strIngredient13,
                strIngredient14,
                strIngredient15,
                strMeasure1,
                strMeasure2,
                strMeasure3,
                strMeasure4,
                strMeasure5,
                strMeasure6,
                strMeasure7,
                strMeasure8,
                strMeasure9,
                strMeasure10,
                strMeasure11,
                strMeasure12,
                strMeasure13,
                strMeasure14,
                strMeasure15,
            } = cocktailAPI.data.drinks[0]
            const cocktail = await Cocktail.create({
                name,
                type,
                glass,
                category,
                image,
                video : video || 'none',
                instruction,
                strIngredient1,
                strIngredient2,
                strIngredient3,
                strIngredient4,
                strIngredient5,
                strIngredient6,
                strIngredient7,
                strIngredient8,
                strIngredient9,
                strIngredient10,
                strIngredient11,
                strIngredient12,
                strIngredient13,
                strIngredient14,
                strIngredient15,
                strMeasure1,
                strMeasure2,
                strMeasure3,
                strMeasure4,
                strMeasure5,
                strMeasure6,
                strMeasure7,
                strMeasure8,
                strMeasure9,
                strMeasure10,
                strMeasure11,
                strMeasure12,
                strMeasure13,
                strMeasure14,
                strMeasure15,
                TagId,
            })
            res.status(201).json({
                message : `Cocktail ${cocktail.name} has been suscessfully added to your tag`
            })
        } catch (err) {
            res.status(500).json(err.message)
        }
    }
}

module.exports = CocktailController