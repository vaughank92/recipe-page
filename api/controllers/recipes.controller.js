var RecipeService = require('../services/recipe.service');

exports.getAllRecipes = async(req, res, next) => {
    //if there is a page, else page 1

    let page = req.query.page ? req.query.page : 1;

    //limit to 10, probably remove later for continuous scroll
    let limit = req.query.limit ? req.query.limit : 10;

    try{
        let recipes = await RecipeService.getAllRecipes({}, page, limit);
        
        return res.status(200).json({
            data: recipes,
            message: "All Recipes Received"
        });
    } catch(e) {
        return res.status(400).json({
            message: e.message
        });
    }
}

exports.getSingleRecipeFromUrl = async(req, res) => {

    if(!req.params.id) {
        return res.status(400).json({
          message: "Missing recipe ID"
        })
    }

    const recipeUrl = req.params.id;

    try {
        const recipe = await RecipeService.getSingleRecipeFromUrl(recipeUrl);
        return res.status(200).json({
            data: recipe,
            message: "Recipe Found"
        });
    } catch(e) {
        return res.status(400).json({
            message: e.message
        })
    }

}

exports.createRecipe = async(req, res, next) => {
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

    try{
        let createdRecipe = await RecipeService.createRecipe(recipe);
        return res.status(201).json({
            data: createdRecipe,
            message: "Successfully Created Recipe"
        });
    }
    catch(e) {
        return res.status(400).json({

            message: "Recipe Creation Unsuccessful " + e
        });
    }
}
