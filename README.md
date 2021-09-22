# p2-iproject-server
Individual Portfolio Server

# Drinking Buddy

## RESTful endpoints 
- `POST /users/register`
- `POST /users/login`

- `GET /tags`
- `GET /tags/:name`
- `POST /tags/add`

- `POST /cocktails/add/:cocktailId`
- `GET /cocktails/searchByName/:name`
- `GET /cocktails/searchById/:id`
- `GET /cocktails/searchByIngredients/:ingredient`
- `GET /cocktails/filterByType/:type`
- `GET /cocktails/filterByGlass/:glass`
- `GET /cocktails/filterByCategory/:category`


## POST /users/register
> Register a user

_Request Header_

```
not needed
```

_Request Body_

```
data : {
    email : "test@gmail.com"
    password : "testing"
}
```

_Response (201 - Created)_

```
{
    id : 1
    email : "test@gmail.com"
}
```

_Response (400 - Bad Request)_

```
{
    message : [
        "email must be unique",
        "Must enter a password",
        "Invalid email format",
    ]
}
```

_Response (500 - Internal Server Error)_

```
{
    "message": "Internal Server Error"
}
```

## POST /users/login
> Login to an account

_Request Header_

```
not needed
```

_Request Body_

```
data : {
    email : test@gmail.com
    password : testing
}
```

_Response (200 - OK)_

```
{
    access_token : "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.                    eyJpZCI6MiwiZW1haWwiOiJ2dWV4QGdtYWlsLmNvbSIsImlhdCI6MTYzMjMzMDg4Mn0.3dcz0CE4S5b9ipMK3XAwy6TMTvcSVNtSuR3GF-i0Er0"
    email : test@gmail.com
    id : 1
}
```

_Response (403 - Forbidden)_

```
{
    message : "Incorrect Email/Password"
}
```

_Response (500 - Internal Server Error)_

```
{
    "message": "Internal Server Error"
}
```

## POST /tags/add
> Fetch all users's created tags

_Request Header_

```
headers : {
    access_token : "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.                    eyJpZCI6MiwiZW1haWwiOiJ2dWV4QGdtYWlsLmNvbSIsImlhdCI6MTYzMjMzMDg4Mn0.3dcz0CE4S5b9ipMK3XAwy6TMTvcSVNtSuR3GF-i0Er0"
}
```

_Request Body_

```
not needed
```

_Response (201 - Created)_

```
{
    message : "Tag <tag name> has been succesfully created"
}
```

_Response (401 - Unauthorized)_

```
{
    message : "You are not authorized fot this command"
}
```

_Response (403 - Forbidden)_

```
{
    message : "No JWT is provided"
}
```

_Response (500 - Internal Server Error)_

```
{
    "message": "Internal Server Error"
}
```

## GET /tags
> Fetch all users's created tags

_Request Header_

```
headers : {
    access_token : "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.                    eyJpZCI6MiwiZW1haWwiOiJ2dWV4QGdtYWlsLmNvbSIsImlhdCI6MTYzMjMzMDg4Mn0.3dcz0CE4S5b9ipMK3XAwy6TMTvcSVNtSuR3GF-i0Er0"
}
```

_Request Body_

```
not needed
```

_Response (200 - OK)_

```
[
    {
        id : 1,
        name : "Wedding",
        UserId : 1
    },
    {
        id : 2,
        name : "Weekend",
        UserId : 1
    }
]
```

_Response (401 - Unauthorized)_

```
{
    message : "You are not authorized fot this command"
}
```

_Response (403 - Forbidden)_

```
{
    message : "No JWT is provided"
}
```

_Response (500 - Internal Server Error)_

```
{
    "message": "Internal Server Error"
}
```

## GET /tags/:name
> Fetch all users's created tags including added cocktails

_Request Header_

```
headers : {
    access_token : "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.                    eyJpZCI6MiwiZW1haWwiOiJ2dWV4QGdtYWlsLmNvbSIsImlhdCI6MTYzMjMzMDg4Mn0.3dcz0CE4S5b9ipMK3XAwy6TMTvcSVNtSuR3GF-i0Er0"
}
```

_Request Body_

```
not needed
```

_Response (200 - OK)_

```
[
    {
        id : 1,
        name : "Wedding",
        UserId : 1,
        Cocktails : [
            {
                "id": 3,
                "idDrink": "13196",
                "name": "Long vodka",
                "type": "Alcoholic",
                "glass": "Highball glass",
                "category": "Ordinary Drink",
                "image": "https://www.thecocktaildb.com/images/media/drink/9179i01503565212.jpg",
                "video": "none",
                "strIngredient1": "Vodka",
                "strIngredient2": "Lime",
                "strIngredient3": "Angostura bitters",
                "strIngredient4": "Tonic water",
                "strIngredient5": "Ice",
                "strIngredient6": null,
                "strIngredient7": null,
                "strIngredient8": null,
                "strIngredient9": null,
                "strIngredient10": null,
                "strIngredient11": null,
                "strIngredient12": null,
                "strIngredient13": null,
                "strIngredient14": null,
                "strIngredient15": null,
                "strMeasure1": "5 cl ",
                "strMeasure2": "1/2 ",
                "strMeasure3": "4 dashes ",
                "strMeasure4": "1 dl Schweppes ",
                "strMeasure5": "4 ",
                "strMeasure6": null,
                "strMeasure7": null,
                "strMeasure8": null,
                "strMeasure9": null,
                "strMeasure10": null,
                "strMeasure11": null,
                "strMeasure12": null,
                "strMeasure13": null,
                "strMeasure14": null,
                "strMeasure15": null,
                "TagId": 8
            }
        ]
    },
    {
        id : 2,
        name : "Weekend",
        UserId : 1
        Cocktails : [
            {
                "id": 3,
                "idDrink": "13196",
                "name": "Long vodka",
                "type": "Alcoholic",
                "glass": "Highball glass",
                "category": "Ordinary Drink",
                "image": "https://www.thecocktaildb.com/images/media/drink/9179i01503565212.jpg",
                "video": "none",
                "strIngredient1": "Vodka",
                "strIngredient2": "Lime",
                "strIngredient3": "Angostura bitters",
                "strIngredient4": "Tonic water",
                "strIngredient5": "Ice",
                "strIngredient6": null,
                "strIngredient7": null,
                "strIngredient8": null,
                "strIngredient9": null,
                "strIngredient10": null,
                "strIngredient11": null,
                "strIngredient12": null,
                "strIngredient13": null,
                "strIngredient14": null,
                "strIngredient15": null,
                "strMeasure1": "5 cl ",
                "strMeasure2": "1/2 ",
                "strMeasure3": "4 dashes ",
                "strMeasure4": "1 dl Schweppes ",
                "strMeasure5": "4 ",
                "strMeasure6": null,
                "strMeasure7": null,
                "strMeasure8": null,
                "strMeasure9": null,
                "strMeasure10": null,
                "strMeasure11": null,
                "strMeasure12": null,
                "strMeasure13": null,
                "strMeasure14": null,
                "strMeasure15": null,
                "TagId": 8
            }
        ]
    }
]
```

_Response (401 - Unauthorized)_

```
{
    message : "You are not authorized fot this command"
}
```

_Response (403 - Forbidden)_

```
{
    message : "No JWT is provided"
}
```

_Response (500 - Internal Server Error)_

```
{
    "message": "Internal Server Error"
}
```

## GET /cocktails/add/:cocktailId
> Add a cocktail to a tag

_Request Header_

```
headers : {
    access_token : "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.                    eyJpZCI6MiwiZW1haWwiOiJ2dWV4QGdtYWlsLmNvbSIsImlhdCI6MTYzMjMzMDg4Mn0.3dcz0CE4S5b9ipMK3XAwy6TMTvcSVNtSuR3GF-i0Er0",
    TagId : 1
}
```

_Request Body_

```
not needed
```

_Response (201 - OK)_

```
{
    message : "Cocktail <Drink name> has been sucessfully added to your tag
}
```

_Response (401 - Unauthorized)_

```
{
    message : "You are not authorized fot this command"
}
```

_Response (403 - Forbidden)_

```
{
    message : "No JWT is provided"
}
```

_Response (500 - Internal Server Error)_

```
{
    "message": "Internal Server Error"
}
```

## GET /cocktails/searchByName/:name
> Search cocktail based on their name

_Request Header_

```
headers : {
    access_token : "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.                    eyJpZCI6MiwiZW1haWwiOiJ2dWV4QGdtYWlsLmNvbSIsImlhdCI6MTYzMjMzMDg4Mn0.3dcz0CE4S5b9ipMK3XAwy6TMTvcSVNtSuR3GF-i0Er0",
}
```

_Request Body_

```
not needed
```

_Response (200 - OK)_

```
[
    {
        "idDrink": "11007",
        "strDrink": "Margarita",
        "strDrinkAlternate": null,
        "strTags": "IBA,ContemporaryClassic",
        "strVideo": null,
        "strCategory": "Ordinary Drink",
        "strIBA": "Contemporary Classics",
        "strAlcoholic": "Alcoholic",
        "strGlass": "Cocktail glass",
        "strInstructions": "Rub the rim of the glass with the lime slice to make the salt stick to it. Take care to moisten only the outer rim and sprinkle the salt on it. The salt should present to the lips of the imbiber and never mix into the cocktail. Shake the other ingredients with ice, then carefully pour into the glass.",
        "strInstructionsES": null,
        "strInstructionsDE": "Reiben Sie den Rand des Glases mit der Limettenscheibe, damit das Salz daran haftet. Achten Sie darauf, dass nur der äußere Rand angefeuchtet wird und streuen Sie das Salz darauf. Das Salz sollte sich auf den Lippen des Genießers befinden und niemals in den Cocktail einmischen. Die anderen Zutaten mit Eis schütteln und vorsichtig in das Glas geben.",
        "strInstructionsFR": null,
        "strInstructionsIT": "Strofina il bordo del bicchiere con la fetta di lime per far aderire il sale.\r\nAvere cura di inumidire solo il bordo esterno e cospargere di sale.\r\nIl sale dovrebbe presentarsi alle labbra del bevitore e non mescolarsi mai al cocktail.\r\nShakerare gli altri ingredienti con ghiaccio, quindi versarli delicatamente nel bicchiere.",
        "strInstructionsZH-HANS": null,
        "strInstructionsZH-HANT": null,
        "strDrinkThumb": "https://www.thecocktaildb.com/images/media/drink/5noda61589575158.jpg",
        "strIngredient1": "Tequila",
        "strIngredient2": "Triple sec",
        "strIngredient3": "Lime juice",
        "strIngredient4": "Salt",
        "strIngredient5": null,
        "strIngredient6": null,
        "strIngredient7": null,
        "strIngredient8": null,
        "strIngredient9": null,
        "strIngredient10": null,
        "strIngredient11": null,
        "strIngredient12": null,
        "strIngredient13": null,
        "strIngredient14": null,
        "strIngredient15": null,
        "strMeasure1": "1 1/2 oz ",
        "strMeasure2": "1/2 oz ",
        "strMeasure3": "1 oz ",
        "strMeasure4": null,
        "strMeasure5": null,
        "strMeasure6": null,
        "strMeasure7": null,
        "strMeasure8": null,
        "strMeasure9": null,
        "strMeasure10": null,
        "strMeasure11": null,
        "strMeasure12": null,
        "strMeasure13": null,
        "strMeasure14": null,
        "strMeasure15": null,
        "strImageSource": "https://commons.wikimedia.org/wiki/File:Klassiche_Margarita.jpg",
        "strImageAttribution": "Cocktailmarler",
        "strCreativeCommonsConfirmed": "Yes",
        "dateModified": "2015-08-18 14:42:59"
    },
    {
        "idDrink": "11118",
        "strDrink": "Blue Margarita",
        "strDrinkAlternate": null,
        "strTags": null,
        "strVideo": null,
        "strCategory": "Ordinary Drink",
        "strIBA": null,
        "strAlcoholic": "Alcoholic",
        "strGlass": "Cocktail glass",
        "strInstructions": "Rub rim of cocktail glass with lime juice. Dip rim in coarse salt. Shake tequila, blue curacao, and lime juice with ice, strain into the salt-rimmed glass, and serve.",
        "strInstructionsES": null,
        "strInstructionsDE": "Den Rand des Cocktailglases mit Limettensaft einreiben. Den Rand in grobes Salz tauchen. Tequila, blauen Curacao und Limettensaft mit Eis schütteln, in das mit Salz umhüllte Glas abseihen und servieren.",
        "strInstructionsFR": null,
        "strInstructionsIT": "Strofinare il bordo del bicchiere da cocktail con succo di lime. Immergere il bordo nel sale grosso. Shakerare tequila, blue curacao e succo di lime con ghiaccio, filtrare nel bicchiere bordato di sale e servire.",
        "strInstructionsZH-HANS": null,
        "strInstructionsZH-HANT": null,
        "strDrinkThumb": "https://www.thecocktaildb.com/images/media/drink/bry4qh1582751040.jpg",
        "strIngredient1": "Tequila",
        "strIngredient2": "Blue Curacao",
        "strIngredient3": "Lime juice",
        "strIngredient4": "Salt",
        "strIngredient5": null,
        "strIngredient6": null,
        "strIngredient7": null,
        "strIngredient8": null,
        "strIngredient9": null,
        "strIngredient10": null,
        "strIngredient11": null,
        "strIngredient12": null,
        "strIngredient13": null,
        "strIngredient14": null,
        "strIngredient15": null,
        "strMeasure1": "1 1/2 oz ",
        "strMeasure2": "1 oz ",
        "strMeasure3": "1 oz ",
        "strMeasure4": "Coarse ",
        "strMeasure5": null,
        "strMeasure6": null,
        "strMeasure7": null,
        "strMeasure8": null,
        "strMeasure9": null,
        "strMeasure10": null,
        "strMeasure11": null,
        "strMeasure12": null,
        "strMeasure13": null,
        "strMeasure14": null,
        "strMeasure15": null,
        "strImageSource": null,
        "strImageAttribution": null,
        "strCreativeCommonsConfirmed": "Yes",
        "dateModified": "2015-08-18 14:51:53"
    },
    {
        "idDrink": "17216",
        "strDrink": "Tommy's Margarita",
        "strDrinkAlternate": null,
        "strTags": "IBA,NewEra",
        "strVideo": null,
        "strCategory": "Ordinary Drink",
        "strIBA": "New Era Drinks",
        "strAlcoholic": "Alcoholic",
        "strGlass": "Old-Fashioned glass",
        "strInstructions": "Shake and strain into a chilled cocktail glass.",
        "strInstructionsES": null,
        "strInstructionsDE": "Schütteln und in ein gekühltes Cocktailglas abseihen.",
        "strInstructionsFR": null,
        "strInstructionsIT": "Shakerare e filtrare in una coppetta da cocktail ghiacciata.",
        "strInstructionsZH-HANS": null,
        "strInstructionsZH-HANT": null,
        "strDrinkThumb": "https://www.thecocktaildb.com/images/media/drink/loezxn1504373874.jpg",
        "strIngredient1": "Tequila",
        "strIngredient2": "Lime Juice",
        "strIngredient3": "Agave syrup",
        "strIngredient4": null,
        "strIngredient5": null,
        "strIngredient6": null,
        "strIngredient7": null,
        "strIngredient8": null,
        "strIngredient9": null,
        "strIngredient10": null,
        "strIngredient11": null,
        "strIngredient12": null,
        "strIngredient13": null,
        "strIngredient14": null,
        "strIngredient15": null,
        "strMeasure1": "4.5 cl",
        "strMeasure2": "1.5 cl",
        "strMeasure3": "2 spoons",
        "strMeasure4": null,
        "strMeasure5": null,
        "strMeasure6": null,
        "strMeasure7": null,
        "strMeasure8": null,
        "strMeasure9": null,
        "strMeasure10": null,
        "strMeasure11": null,
        "strMeasure12": null,
        "strMeasure13": null,
        "strMeasure14": null,
        "strMeasure15": null,
        "strImageSource": null,
        "strImageAttribution": null,
        "strCreativeCommonsConfirmed": "No",
        "dateModified": "2017-09-02 18:37:54"
    },
]
```

_Response (401 - Unauthorized)_

```
{
    message : "You are not authorized fot this command"
}
```

_Response (403 - Forbidden)_

```
{
    message : "No JWT is provided"
}
```

_Response (500 - Internal Server Error)_

```
{
    "message": "Internal Server Error"
}
```

## GET /cocktails/searchById/:id
> Search cocktail based on their id
_Request Header_

```
headers : {
    access_token : "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.                    eyJpZCI6MiwiZW1haWwiOiJ2dWV4QGdtYWlsLmNvbSIsImlhdCI6MTYzMjMzMDg4Mn0.3dcz0CE4S5b9ipMK3XAwy6TMTvcSVNtSuR3GF-i0Er0",
}
```

_Request Body_

```
not needed
```

_Response (200 - OK)_

```
{
    "cocktailDetail": {
        "idDrink": "13196",
        "strDrink": "Long vodka",
        "strDrinkAlternate": null,
        "strTags": null,
        "strVideo": null,
        "strCategory": "Ordinary Drink",
        "strIBA": null,
        "strAlcoholic": "Alcoholic",
        "strGlass": "Highball glass",
        "strInstructions": "Shake a tall glass with ice cubes and Angostura, coating the inside of the glass. Por the vodka onto this, add 1 slice of lime and squeeze juice out of remainder, mix with tonic, stir and voila you have a Long Vodka",
        "strInstructionsES": null,
        "strInstructionsDE": "Schütteln Sie ein hohes Glas mit Eiswürfeln und Angostura und beschichten Sie so die Innenseite des Glases. Den Wodka darüber gießen, 1 Scheibe Limette hinzufügen und den Saft aus dem Rest herausquetschen, mit Tonic mischen, umrühren und voila, Sie haben einen langen Wodka.",
        "strInstructionsFR": null,
        "strInstructionsIT": "Agitare un bicchiere alto con cubetti di ghiaccio e angostura, ricoprendo l'interno del bicchiere.\r\nVersare la vodka su questo, aggiungere 1 fetta di lime e spremere il succo dal resto, mescolare con il tonico, mescolare e voilà hai una Long Vodka",
        "strInstructionsZH-HANS": null,
        "strInstructionsZH-HANT": null,
        "strDrinkThumb": "https://www.thecocktaildb.com/images/media/drink/9179i01503565212.jpg",
        "strIngredient1": "Vodka",
        "strIngredient2": "Lime",
        "strIngredient3": "Angostura bitters",
        "strIngredient4": "Tonic water",
        "strIngredient5": "Ice",
        "strIngredient6": null,
        "strIngredient7": null,
        "strIngredient8": null,
        "strIngredient9": null,
        "strIngredient10": null,
        "strIngredient11": null,
        "strIngredient12": null,
        "strIngredient13": null,
        "strIngredient14": null,
        "strIngredient15": null,
        "strMeasure1": "5 cl ",
        "strMeasure2": "1/2 ",
        "strMeasure3": "4 dashes ",
        "strMeasure4": "1 dl Schweppes ",
        "strMeasure5": "4 ",
        "strMeasure6": null,
        "strMeasure7": null,
        "strMeasure8": null,
        "strMeasure9": null,
        "strMeasure10": null,
        "strMeasure11": null,
        "strMeasure12": null,
        "strMeasure13": null,
        "strMeasure14": null,
        "strMeasure15": null,
        "strImageSource": null,
        "strImageAttribution": null,
        "strCreativeCommonsConfirmed": "No",
        "dateModified": "2017-08-24 10:00:12"
    },
    "ingredientDetail": [
        {
            "ingredient": "Vodka",
            "measure": "5 cl "
        },
        {
            "ingredient": "Lime",
            "measure": "1/2 "
        },
        {
            "ingredient": "Angostura bitters",
            "measure": "4 dashes "
        },
        {
            "ingredient": "Tonic water",
            "measure": "1 dl Schweppes "
        },
        {
            "ingredient": "Ice",
            "measure": "4 "
        }
    ],
    "youtubeVideoDatas": [
        "_tR6LIJCP2c",
        "rpULEONTuuQ",
        "qB86g0hJJWQ",
        "O9SiTA7SeEM",
        "1z5FCi-XpHQ"
    ]
}
```

_Response (401 - Unauthorized)_

```
{
    message : "You are not authorized fot this command"
}
```

_Response (403 - Forbidden)_

```
{
    message : "No JWT is provided"
}
```

_Response (500 - Internal Server Error)_

```
{
    "message": "Internal Server Error"
}
```

## GET /cocktails/searchByIngredients/:ingredient
> Search cocktail based on their ingredient

_Request Header_

```
headers : {
    access_token : "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.                    eyJpZCI6MiwiZW1haWwiOiJ2dWV4QGdtYWlsLmNvbSIsImlhdCI6MTYzMjMzMDg4Mn0.3dcz0CE4S5b9ipMK3XAwy6TMTvcSVNtSuR3GF-i0Er0",
}
```

_Request Body_

```
not needed
```

_Response (200 - OK)_

```
[
    {
        "idDrink": "16405",
        "strDrink": "A Piece of Ass",
        "strDrinkAlternate": null,
        "strTags": null,
        "strVideo": null,
        "strCategory": "Other/Unknown",
        "strIBA": null,
        "strAlcoholic": "Alcoholic",
        "strGlass": "Highball glass",
        "strInstructions": "Put ice in glass. Pour in shots. Fill with Sour Mix.",
        "strInstructionsES": null,
        "strInstructionsDE": "Gib Eis in ein Glas. Füllen Sie Shots ein. Mit Sour Mix auffüllen.",
        "strInstructionsFR": null,
        "strInstructionsIT": "Metti il ghiaccio in un bicchiere.\r\nVersare i colpi.\r\nRiempi con Sour Mix.",
        "strInstructionsZH-HANS": null,
        "strInstructionsZH-HANT": null,
        "strDrinkThumb": "https://www.thecocktaildb.com/images/media/drink/tqxyxx1472719737.jpg",
        "strIngredient1": "Amaretto",
        "strIngredient2": "Southern Comfort",
        "strIngredient3": "Ice",
        "strIngredient4": "Sour mix",
        "strIngredient5": null,
        "strIngredient6": null,
        "strIngredient7": null,
        "strIngredient8": null,
        "strIngredient9": null,
        "strIngredient10": null,
        "strIngredient11": null,
        "strIngredient12": null,
        "strIngredient13": null,
        "strIngredient14": null,
        "strIngredient15": null,
        "strMeasure1": "1 shot ",
        "strMeasure2": "1 shot ",
        "strMeasure3": "cubes",
        "strMeasure4": null,
        "strMeasure5": null,
        "strMeasure6": null,
        "strMeasure7": null,
        "strMeasure8": null,
        "strMeasure9": null,
        "strMeasure10": null,
        "strMeasure11": null,
        "strMeasure12": null,
        "strMeasure13": null,
        "strMeasure14": null,
        "strMeasure15": null,
        "strImageSource": null,
        "strImageAttribution": null,
        "strCreativeCommonsConfirmed": "No",
        "dateModified": "2016-09-01 09:48:57"
    },
    {
        "idDrink": "17005",
        "strDrink": "A True Amaretto Sour",
        "strDrinkAlternate": null,
        "strTags": null,
        "strVideo": null,
        "strCategory": "Cocktail",
        "strIBA": null,
        "strAlcoholic": "Alcoholic",
        "strGlass": "Old-fashioned glass",
        "strInstructions": "Rub the rim of an old fashioned glass with lemon, and dip repeatedly into granulated sugar until it has a good \"frosted\" rim. Shake a jigger of Amaretto with the juice of 1/2 a lemon. Strain into glass and add ice. Garnish with a Marachino Cherry.",
        "strInstructionsES": null,
        "strInstructionsDE": "Reiben Sie den Rand eines old fashioned Glases mit Zitrone ein und tauchen Sie es wiederholt in Kristallzucker, bis es einen guten \"gefrosteten\" Rand hat. Einen Jigger Amaretto mit dem Saft von 1/2 Zitrone schütteln. In ein Glas abseihen und Eis hinzufügen. Mit einer Marachinokirsche garnieren.",
        "strInstructionsFR": null,
        "strInstructionsIT": "Strofinare il bordo di un bicchiere vecchio stile con il limone e immergerlo ripetutamente nello zucchero semolato fino a ottenere un buon bordo \"glassato\".\r\nShakerare un jigger di Amaretto con il succo di 1/2 limone.\r\nFiltrare nel bicchiere e aggiungere il ghiaccio.\r\nGuarnire con una ciliegia al maraschino.",
        "strInstructionsZH-HANS": null,
        "strInstructionsZH-HANT": null,
        "strDrinkThumb": "https://www.thecocktaildb.com/images/media/drink/rptuxy1472669372.jpg",
        "strIngredient1": "Amaretto",
        "strIngredient2": "Lemon",
        "strIngredient3": "Ice",
        "strIngredient4": "Maraschino cherry",
        "strIngredient5": null,
        "strIngredient6": null,
        "strIngredient7": null,
        "strIngredient8": null,
        "strIngredient9": null,
        "strIngredient10": null,
        "strIngredient11": null,
        "strIngredient12": null,
        "strIngredient13": null,
        "strIngredient14": null,
        "strIngredient15": null,
        "strMeasure1": "1 jigger ",
        "strMeasure2": "Juice of 1/2 ",
        "strMeasure3": null,
        "strMeasure4": null,
        "strMeasure5": null,
        "strMeasure6": null,
        "strMeasure7": null,
        "strMeasure8": null,
        "strMeasure9": null,
        "strMeasure10": null,
        "strMeasure11": null,
        "strMeasure12": null,
        "strMeasure13": null,
        "strMeasure14": null,
        "strMeasure15": null,
        "strImageSource": null,
        "strImageAttribution": null,
        "strCreativeCommonsConfirmed": "No",
        "dateModified": "2016-08-31 19:49:32"
    },
]
```

_Response (401 - Unauthorized)_

```
{
    message : "You are not authorized fot this command"
}
```

_Response (403 - Forbidden)_

```
{
    message : "No JWT is provided"
}
```

_Response (500 - Internal Server Error)_

```
{
    "message": "Internal Server Error"
}
```

## GET /cocktails/searchByType/:type
> Search cocktail based on their type (alcoholic or non alcoholic)

_Request Header_

```
headers : {
    access_token : "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.                    eyJpZCI6MiwiZW1haWwiOiJ2dWV4QGdtYWlsLmNvbSIsImlhdCI6MTYzMjMzMDg4Mn0.3dcz0CE4S5b9ipMK3XAwy6TMTvcSVNtSuR3GF-i0Er0",
}
```

_Request Body_

```
not needed
```

_Response (200 - OK)_

```
[
    {
        "idDrink": "12560",
        "strDrink": "Afterglow",
        "strDrinkAlternate": null,
        "strTags": null,
        "strVideo": null,
        "strCategory": "Cocktail",
        "strIBA": null,
        "strAlcoholic": "Non alcoholic",
        "strGlass": "Highball Glass",
        "strInstructions": "Mix. Serve over ice.",
        "strInstructionsES": null,
        "strInstructionsDE": "Mischen. Auf Eis servieren.",
        "strInstructionsFR": null,
        "strInstructionsIT": "Servire con ghiaccio.Mescolare.",
        "strInstructionsZH-HANS": null,
        "strInstructionsZH-HANT": null,
        "strDrinkThumb": "https://www.thecocktaildb.com/images/media/drink/vuquyv1468876052.jpg",
        "strIngredient1": "Grenadine",
        "strIngredient2": "Orange juice",
        "strIngredient3": "Pineapple juice",
        "strIngredient4": null,
        "strIngredient5": null,
        "strIngredient6": null,
        "strIngredient7": null,
        "strIngredient8": null,
        "strIngredient9": null,
        "strIngredient10": null,
        "strIngredient11": null,
        "strIngredient12": null,
        "strIngredient13": null,
        "strIngredient14": null,
        "strIngredient15": null,
        "strMeasure1": "1 part ",
        "strMeasure2": "4 parts ",
        "strMeasure3": "4 parts ",
        "strMeasure4": null,
        "strMeasure5": null,
        "strMeasure6": null,
        "strMeasure7": null,
        "strMeasure8": null,
        "strMeasure9": null,
        "strMeasure10": null,
        "strMeasure11": null,
        "strMeasure12": null,
        "strMeasure13": null,
        "strMeasure14": null,
        "strMeasure15": null,
        "strImageSource": null,
        "strImageAttribution": null,
        "strCreativeCommonsConfirmed": "No",
        "dateModified": "2016-07-18 22:07:32"
    },
    {
        "idDrink": "12562",
        "strDrink": "Alice Cocktail",
        "strDrinkAlternate": null,
        "strTags": null,
        "strVideo": null,
        "strCategory": "Cocktail",
        "strIBA": null,
        "strAlcoholic": "Non alcoholic",
        "strGlass": "Cocktail glass",
        "strInstructions": "Shake well, strain into a large cocktail glass.",
        "strInstructionsES": null,
        "strInstructionsDE": "Gut schütteln, in ein großes Cocktailglas abseihen.",
        "strInstructionsFR": null,
        "strInstructionsIT": "Shakerare bene, filtrare in una coppetta da cocktail capiente.",
        "strInstructionsZH-HANS": null,
        "strInstructionsZH-HANT": null,
        "strDrinkThumb": "https://www.thecocktaildb.com/images/media/drink/qyqtpv1468876144.jpg",
        "strIngredient1": "Grenadine",
        "strIngredient2": "Orange juice",
        "strIngredient3": "Pineapple juice",
        "strIngredient4": "Cream",
        "strIngredient5": null,
        "strIngredient6": null,
        "strIngredient7": null,
        "strIngredient8": null,
        "strIngredient9": null,
        "strIngredient10": null,
        "strIngredient11": null,
        "strIngredient12": null,
        "strIngredient13": null,
        "strIngredient14": null,
        "strIngredient15": null,
        "strMeasure1": "1 cl ",
        "strMeasure2": "1 cl ",
        "strMeasure3": "2 cl ",
        "strMeasure4": "4 cl ",
        "strMeasure5": null,
        "strMeasure6": null,
        "strMeasure7": null,
        "strMeasure8": null,
        "strMeasure9": null,
        "strMeasure10": null,
        "strMeasure11": null,
        "strMeasure12": null,
        "strMeasure13": null,
        "strMeasure14": null,
        "strMeasure15": null,
        "strImageSource": null,
        "strImageAttribution": null,
        "strCreativeCommonsConfirmed": "No",
        "dateModified": "2016-07-18 22:09:04"
    },
]
```

_Response (401 - Unauthorized)_

```
{
    message : "You are not authorized fot this command"
}
```

_Response (403 - Forbidden)_

```
{
    message : "No JWT is provided"
}
```

_Response (500 - Internal Server Error)_
```
{
    "message": "Internal Server Error"
}
```

## GET /cocktails/searchByGlass/:glass
> Search cocktail based on their type (Beer, cocktail glass, ect)

_Request Header_

```
headers : {
    access_token : "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.                    eyJpZCI6MiwiZW1haWwiOiJ2dWV4QGdtYWlsLmNvbSIsImlhdCI6MTYzMjMzMDg4Mn0.3dcz0CE4S5b9ipMK3XAwy6TMTvcSVNtSuR3GF-i0Er0",
}
```

_Request Body_

```
not needed
```

_Response (200 - OK)_

```
[
    {
        "idDrink": "16108",
        "strDrink": "9 1/2 Weeks",
        "strDrinkAlternate": null,
        "strTags": null,
        "strVideo": null,
        "strCategory": "Cocktail",
        "strIBA": null,
        "strAlcoholic": "Alcoholic",
        "strGlass": "Cocktail glass",
        "strInstructions": "Combine all ingredients in glass mixer. Chill and strain into Cocktail glass. Garnish with sliced strawberry.",
        "strInstructionsES": null,
        "strInstructionsDE": "Alle Zutaten in einem Glasmischer vermengen. Abkühlen lassen und in das Cocktailglas abseihen. Mit Erdbeerscheiben garnieren.",
        "strInstructionsFR": null,
        "strInstructionsIT": "Unisci tutti gli ingredienti in una planetaria.\r\nRaffredda e versa in un bicchiere da cocktail.\r\nGuarnire con la fragola a fette.",
        "strInstructionsZH-HANS": null,
        "strInstructionsZH-HANT": null,
        "strDrinkThumb": "https://www.thecocktaildb.com/images/media/drink/xvwusr1472669302.jpg",
        "strIngredient1": "Absolut Citron",
        "strIngredient2": "Orange Curacao",
        "strIngredient3": "Strawberry liqueur",
        "strIngredient4": "Orange juice",
        "strIngredient5": null,
        "strIngredient6": null,
        "strIngredient7": null,
        "strIngredient8": null,
        "strIngredient9": null,
        "strIngredient10": null,
        "strIngredient11": null,
        "strIngredient12": null,
        "strIngredient13": null,
        "strIngredient14": null,
        "strIngredient15": null,
        "strMeasure1": "2 oz ",
        "strMeasure2": "1/2 oz ",
        "strMeasure3": "1 splash ",
        "strMeasure4": "1 oz ",
        "strMeasure5": null,
        "strMeasure6": null,
        "strMeasure7": null,
        "strMeasure8": null,
        "strMeasure9": null,
        "strMeasure10": null,
        "strMeasure11": null,
        "strMeasure12": null,
        "strMeasure13": null,
        "strMeasure14": null,
        "strMeasure15": null,
        "strImageSource": null,
        "strImageAttribution": null,
        "strCreativeCommonsConfirmed": "No",
        "dateModified": "2016-08-31 19:48:22"
    },
    {
        "idDrink": "17833",
        "strDrink": "A. J.",
        "strDrinkAlternate": null,
        "strTags": null,
        "strVideo": null,
        "strCategory": "Ordinary Drink",
        "strIBA": null,
        "strAlcoholic": "Alcoholic",
        "strGlass": "Cocktail glass",
        "strInstructions": "Shake ingredients with ice, strain into a cocktail glass, and serve.",
        "strInstructionsES": null,
        "strInstructionsDE": null,
        "strInstructionsFR": null,
        "strInstructionsIT": "Shakerare gli ingredienti con ghiaccio, filtrare in una coppetta da cocktail e servire.",
        "strInstructionsZH-HANS": null,
        "strInstructionsZH-HANT": null,
        "strDrinkThumb": "https://www.thecocktaildb.com/images/media/drink/l74qo91582480316.jpg",
        "strIngredient1": "Applejack",
        "strIngredient2": "Grapefruit juice",
        "strIngredient3": null,
        "strIngredient4": null,
        "strIngredient5": null,
        "strIngredient6": null,
        "strIngredient7": null,
        "strIngredient8": null,
        "strIngredient9": null,
        "strIngredient10": null,
        "strIngredient11": null,
        "strIngredient12": null,
        "strIngredient13": null,
        "strIngredient14": null,
        "strIngredient15": null,
        "strMeasure1": "1 1/2 oz ",
        "strMeasure2": "1 oz ",
        "strMeasure3": null,
        "strMeasure4": null,
        "strMeasure5": null,
        "strMeasure6": null,
        "strMeasure7": null,
        "strMeasure8": null,
        "strMeasure9": null,
        "strMeasure10": null,
        "strMeasure11": null,
        "strMeasure12": null,
        "strMeasure13": null,
        "strMeasure14": null,
        "strMeasure15": null,
        "strImageSource": null,
        "strImageAttribution": null,
        "strCreativeCommonsConfirmed": "Yes",
        "dateModified": "2016-09-02 11:16:58"
    },
]
```

_Response (401 - Unauthorized)_

```
{
    message : "You are not authorized fot this command"
}
```

_Response (403 - Forbidden)_

```
{
    message : "No JWT is provided"
}
```

_Response (500 - Internal Server Error)_
```
{
    "message": "Internal Server Error"
}
```

## GET /cocktails/searchByCategory/:category
> Search cocktail based on their category (Ordinary drink, ect)

_Request Header_

```
headers : {
    access_token : "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.                    eyJpZCI6MiwiZW1haWwiOiJ2dWV4QGdtYWlsLmNvbSIsImlhdCI6MTYzMjMzMDg4Mn0.3dcz0CE4S5b9ipMK3XAwy6TMTvcSVNtSuR3GF-i0Er0",
}
```

_Request Body_

```
not needed
```

_Response (200 - OK)_

```
[
    {
        "idDrink": "15300",
        "strDrink": "3-Mile Long Island Iced Tea",
        "strDrinkAlternate": null,
        "strTags": null,
        "strVideo": null,
        "strCategory": "Ordinary Drink",
        "strIBA": null,
        "strAlcoholic": "Alcoholic",
        "strGlass": "Collins Glass",
        "strInstructions": "Fill 14oz glass with ice and alcohol. Fill 2/3 glass with cola and remainder with sweet & sour. Top with dash of bitters and lemon wedge.",
        "strInstructionsES": null,
        "strInstructionsDE": "Füllen Sie ein 12 cl. Glas mit Eis und Alkohol. Füllen Sie 2/3 des Glases mit Cola und den Rest mit Süß-Sauer. Mit einem Schuss Bitter und Zitronenkeil garnieren.",
        "strInstructionsFR": null,
        "strInstructionsIT": "Riempi un bicchiere da almeno 400ml con ghiaccio e alcol. Riempire i restanti 2/3 di bicchiere di cola e il resto di bevanda sweet & sour. Completare con un pizzico di bitter e uno spicchio di limone.",
        "strInstructionsZH-HANS": null,
        "strInstructionsZH-HANT": null,
        "strDrinkThumb": "https://www.thecocktaildb.com/images/media/drink/rrtssw1472668972.jpg",
        "strIngredient1": "Gin",
        "strIngredient2": "Light rum",
        "strIngredient3": "Tequila",
        "strIngredient4": "Triple sec",
        "strIngredient5": "Vodka",
        "strIngredient6": "Coca-Cola",
        "strIngredient7": "Sweet and sour",
        "strIngredient8": "Bitters",
        "strIngredient9": "Lemon",
        "strIngredient10": null,
        "strIngredient11": null,
        "strIngredient12": null,
        "strIngredient13": null,
        "strIngredient14": null,
        "strIngredient15": null,
        "strMeasure1": "1/2 oz",
        "strMeasure2": "1/2 oz",
        "strMeasure3": "1/2 oz",
        "strMeasure4": "1/2 oz",
        "strMeasure5": "1/2 oz",
        "strMeasure6": "1/2 oz",
        "strMeasure7": "1-2 dash ",
        "strMeasure8": "1 wedge ",
        "strMeasure9": "Garnish with",
        "strMeasure10": null,
        "strMeasure11": null,
        "strMeasure12": null,
        "strMeasure13": null,
        "strMeasure14": null,
        "strMeasure15": null,
        "strImageSource": null,
        "strImageAttribution": null,
        "strCreativeCommonsConfirmed": "No",
        "dateModified": "2016-08-31 19:42:52"
    },
    {
        "idDrink": "13581",
        "strDrink": "410 Gone",
        "strDrinkAlternate": null,
        "strTags": null,
        "strVideo": null,
        "strCategory": "Ordinary Drink",
        "strIBA": null,
        "strAlcoholic": "Alcoholic",
        "strGlass": "Collins Glass",
        "strInstructions": "",
        "strInstructionsES": null,
        "strInstructionsDE": "",
        "strInstructionsFR": null,
        "strInstructionsIT": "Versa in un bicchiere tutti gli ingredienti. Agitare bene",
        "strInstructionsZH-HANS": null,
        "strInstructionsZH-HANT": null,
        "strDrinkThumb": "https://www.thecocktaildb.com/images/media/drink/xtuyqv1472669026.jpg",
        "strIngredient1": "Peach Vodka",
        "strIngredient2": "Coca-Cola",
        "strIngredient3": null,
        "strIngredient4": null,
        "strIngredient5": null,
        "strIngredient6": null,
        "strIngredient7": null,
        "strIngredient8": null,
        "strIngredient9": null,
        "strIngredient10": null,
        "strIngredient11": null,
        "strIngredient12": null,
        "strIngredient13": null,
        "strIngredient14": null,
        "strIngredient15": null,
        "strMeasure1": "2-3 oz",
        "strMeasure2": null,
        "strMeasure3": null,
        "strMeasure4": null,
        "strMeasure5": null,
        "strMeasure6": null,
        "strMeasure7": null,
        "strMeasure8": null,
        "strMeasure9": null,
        "strMeasure10": null,
        "strMeasure11": null,
        "strMeasure12": null,
        "strMeasure13": null,
        "strMeasure14": null,
        "strMeasure15": null,
        "strImageSource": null,
        "strImageAttribution": null,
        "strCreativeCommonsConfirmed": "No",
        "dateModified": "2016-08-31 19:43:46"
    },
]
```

_Response (401 - Unauthorized)_

```
{
    message : "You are not authorized fot this command"
}
```

_Response (403 - Forbidden)_

```
{
    message : "No JWT is provided"
}
```

_Response (500 - Internal Server Error)_
```
{
    "message": "Internal Server Error"
}
```