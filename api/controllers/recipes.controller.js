var RecipeService = require('../services/recipe.service');
var RecipeFormService = require('../services/recipeform.service');

/**
 * grab all recipes
 * endpoint: /
 */
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

/**
 * grab a single recipe
 * @param {string} url - url keys for the recipe
 * endpoint: /recipes/:url
 */
exports.getSingleRecipeFromUrl = async(req, res) => {

    if(!req.params.url) {
        return res.status(400).json({
          message: "Missing recipe URL"
        })
    }

    const recipeUrl = req.params.url;

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

/**
 * create a single recipe
 * @param {object} recipe - recipe object currently no form to submit
 * endpoint: /
 */
exports.createRecipe = async(req, res, next) => {

    console.log('body', req.body);

    let url = await RecipeFormService.buildUrl(req.body.title);
    let ingredients = await RecipeFormService.formatIngredients(req.body.ingredients);

    const recipe = {
        name: req.body.title,
        url: url,
        image: req.body.image,
        desc: req.body.desc,
        source: req.body.source,
        keywords: req.body.keywords,
        ingredients: ingredients,
        directions: req.body.directions
    }

    try{
        let createdRecipe = await RecipeService.createRecipe(recipe);

        return res.status(201).json({
            check: recipe,
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
