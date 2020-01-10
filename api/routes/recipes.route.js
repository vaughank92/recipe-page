const express = require('express');

const router = express.Router();

const RecipesController = require('../controllers/recipes.controller');

router.get('/', RecipesController.getAllRecipes);

router.post('/', RecipesController.createRecipe);

router.get('/:id', RecipesController.getSingleRecipeFromUrl);

module.exports = router;