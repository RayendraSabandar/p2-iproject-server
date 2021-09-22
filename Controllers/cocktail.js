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
            res.status(400).json(err)
        }
    }

    static async searchById(req, res){
        const { id } = req.params
        try {
            const cocktail = await axios({
                method : 'get',
                url : `https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=${id}`,
            })
            const cocktailDetail = cocktail.data.drinks[0]
            const ingredientName = []
            const {
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
            } = cocktail.data.drinks[0]
            if(strIngredient1) ingredientName.push(strIngredient1)
            if(strIngredient2) ingredientName.push(strIngredient2)
            if(strIngredient3) ingredientName.push(strIngredient3)
            if(strIngredient4) ingredientName.push(strIngredient4)
            if(strIngredient5) ingredientName.push(strIngredient5)
            if(strIngredient6) ingredientName.push(strIngredient6)
            if(strIngredient7) ingredientName.push(strIngredient7)
            if(strIngredient8) ingredientName.push(strIngredient8)
            if(strIngredient9) ingredientName.push(strIngredient9)
            if(strIngredient10) ingredientName.push(strIngredient10)
            if(strIngredient11) ingredientName.push(strIngredient11)
            if(strIngredient12) ingredientName.push(strIngredient12)
            if(strIngredient13) ingredientName.push(strIngredient13)
            if(strIngredient14) ingredientName.push(strIngredient14)
            if(strIngredient15) ingredientName.push(strIngredient15)

            res.status(200).json({cocktailDetail, ingredientName})
        } catch (err) {
            console.log(err);
            res.status(500).json(err.name)
        }
    }

    static async searchByIngredient(req, res){
        const { ingredient } = req.params
        try {
            const cocktail = await axios({
                method: 'get',
                url : `https://www.thecocktaildb.com/api/json/v1/1/filter.php?i=${ingredient}`
            })
            const idArray = cocktail.data.drinks.map(el => {
                return el.idDrink
            })
            let newArray = idArray.map(async(el) => {
                const cocktailDetail = await axios({
                    method : 'get',
                    url : `https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=${el}`,
                })  
               return cocktailDetail.data.drinks[0]
            });
            Promise.all(newArray).then(function(values) {
                res.status(200).json(values)
            })
        } catch (err) {
            res.status(500).json(err)
        }
    }

    static async filterByType(req, res){
        const { type } = req.params
        try {
            const cocktail = await axios({
                method: 'get',
                url : `https://www.thecocktaildb.com/api/json/v1/1/filter.php?a=${type}`
            })
            const idArray = cocktail.data.drinks.map(el => {
                return el.idDrink
            })
            let newArray = idArray.map(async(el) => {
                const cocktailDetail = await axios({
                    method : 'get',
                    url : `https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=${el}`,
                })  
               return cocktailDetail.data.drinks[0]
            });
            Promise.all(newArray).then(function(values) {
                res.status(200).json(values)
            })
        } catch (err) {
            res.status(500).json(err)
        }
    }

    static async filterByGlass(req, res){
        const { glass } = req.params
        try {
            const cocktail = await axios({
                method: 'get',
                url : `http://www.thecocktaildb.com/api/json/v1/1/filter.php?g=${glass}`
            })
            const idArray = cocktail.data.drinks.map(el => {
                return el.idDrink
            })
            let newArray = idArray.map(async(el) => {
                const cocktailDetail = await axios({
                    method : 'get',
                    url : `https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=${el}`,
                })  
               return cocktailDetail.data.drinks[0]
            });
            Promise.all(newArray).then(function(values) {
                res.status(200).json(values)
            })
        } catch (err) {
            res.status(500).json(err)
        }
    }

    static async filterByCategory(req, res){
        const { category } = req.params
        try {
            const cocktail = await axios({
                method: 'get',
                url : `https://www.thecocktaildb.com/api/json/v1/1/filter.php?c=${category}`
            })
            const idArray = cocktail.data.drinks.map(el => {
                return el.idDrink
            })
            let newArray = idArray.map(async(el) => {
                const cocktailDetail = await axios({
                    method : 'get',
                    url : `https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=${el}`,
                })  
               return cocktailDetail.data.drinks[0]
            });
            Promise.all(newArray).then(function(values) {
                res.status(200).json(values)
            })
        } catch (err) {
            res.status(500).json(err)
        }
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
                idDrink, 
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
                idDrink,
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
            // res.status(201).json(cocktailAPI.data.drinks[0])
        } catch (err) {
            res.status(500).json(err.message)
        }
    }
}

module.exports = CocktailController