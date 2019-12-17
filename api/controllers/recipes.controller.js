var RecipeService = require('../services/recipe.service');

_this = this;

exports.getAllRecipes = async(req, res, next) => {
    //if there is a page, else page 1

    let page = req.query.page ? req.query.page : 1;

    //limit to 10, probably remove later for continuous scroll
    let limit = req.query.limit ? req.query.limit : 10;

    try{
        let recipes = await RecipeService.getAllRecipes({}, page, limit);
        
        return res.status(200).json({
            status: 200,
            data: recipes,
            message: "All Recipes Received"
        });
    } catch(e) {
        return res.status(400).json({
            status: 400,
            message: e.message
        });
    }
}

exports.createRecipe = async(req, res, next) => {
    console.log(req.body);

    const recipe = {
        name: req.body.name,
        url: req.body.url,
        image: req.body.image,
        desc: req.body.desc,
        source: req.body.source,
        keywords: req.body.keywords,
        ingredients: req.body.ingredients,
        directions: req.body.directions
    }

    console.log(recipe.ingredients);

    try{
        let createdRecipe = await RecipeService.createRecipe(recipe);
        return res.status(201).json({
            status: 201,
            data: createdRecipe,
            message: "Successfully Created Recipe"
        });
    }
    catch(e) {
        return res.status(400).json({
            status: 400,
            message: "Recipe Creation Unsuccessful " + e
        });
    }
}
