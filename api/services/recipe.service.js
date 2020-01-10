let Recipe = require('../models/recipe.model');

exports.getAllRecipes = async(query, page, limit) => {
    const options = {
        page,
        limit
    }

    try {
        let recipes = await Recipe.paginate(query, options);
        return recipes;
    } catch (e) {
        throw Error("Error paginating Recipes");
    }
}

exports.getSingleRecipeFromUrl = async(recipeUrl) => {

    try {
        const recipe = await Recipe.findOne({url: recipeUrl}, (err, doc) => {
            return err ? err : doc;
        });
        return recipe;
    } catch(e) {
        throw Error("Recipe could not be found");
    }
}

exports.createRecipe = async(recipe) => {

    let newRecipe = new Recipe({
        name: recipe.name,
        url: recipe.url,
        image: recipe.image,
        desc: recipe.desc,
        source: recipe.source,
        keywords: recipe.keywords,
        ingredients: recipe.ingredients,
        directions: recipe.directions
    });

    try{
        let savedRecipe = await newRecipe.save();
        return savedRecipe;
    } catch(e) {
        throw Error("Error Creating Recipe " + e);
    }
}

exports.deleteRecipe = async(id) => {
    try {
        let deleted = await Recipe.remove({_id: id});
        if(deleted.result.n === 0) {
            throw Error("Recipe could not be deleted");
        }
        return deleted;
    } catch(e) {
        throw Error("Error while deleting Recipe");
    }
}