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
            const ingredientDetail = []
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
            } = cocktail.data.drinks[0]
            if(strIngredient1 || strMeasure1) ingredientDetail.push({ingredient : strIngredient1, measure : strMeasure1})
            if(strIngredient2 || strMeasure2) ingredientDetail.push({ingredient : strIngredient2, measure : strMeasure2})
            if(strIngredient3 || strMeasure3) ingredientDetail.push({ingredient : strIngredient3, measure : strMeasure3})
            if(strIngredient4 || strMeasure4) ingredientDetail.push({ingredient : strIngredient4, measure : strMeasure4})
            if(strIngredient5 || strMeasure5) ingredientDetail.push({ingredient : strIngredient5, measure : strMeasure5})
            if(strIngredient6 || strMeasure6) ingredientDetail.push({ingredient : strIngredient6, measure : strMeasure6})
            if(strIngredient7 || strMeasure7) ingredientDetail.push({ingredient : strIngredient7, measure : strMeasure7})
            if(strIngredient8 || strMeasure8) ingredientDetail.push({ingredient : strIngredient8, measure : strMeasure8})
            if(strIngredient9 || strMeasure9) ingredientDetail.push({ingredient : strIngredient9, measure : strMeasure9})
            if(strIngredient10 || strMeasure10) ingredientDetail.push({ingredient : strIngredient10, measure : strMeasure10})
            if(strIngredient11 || strMeasure11) ingredientDetail.push({ingredient : strIngredient11, measure : strMeasure11})
            if(strIngredient12 || strMeasure12) ingredientDetail.push({ingredient : strIngredient12, measure : strMeasure12})
            if(strIngredient13 || strMeasure13) ingredientDetail.push({ingredient : strIngredient13, measure : strMeasure13})
            if(strIngredient14 || strMeasure14) ingredientDetail.push({ingredient : strIngredient14, measure : strMeasure14})
            if(strIngredient15 || strMeasure15) ingredientDetail.push({ingredient : strIngredient15, measure : strMeasure15})
            const youtubeVideos = await axios({
                method : 'get',
                url : 'https://youtube.googleapis.com/youtube/v3/search',
                params : {
                    part : 'snippet',
                    q : cocktailDetail.strDrink + ' ' + 'tutorial',
                    key : process.env.API_KEY
                }
            })
            const youtubeVideoDatas = youtubeVideos.data.items.map(el => {
                return el.id.videoId
            })

            res.status(200).json({cocktailDetail, ingredientDetail, youtubeVideoDatas})
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