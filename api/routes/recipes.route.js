const express = require('express');

const router = express.Router();

const RecipesController = require('../controllers/recipes.controller');

router.get('/', RecipesController.getAllRecipes);

router.post('/create', RecipesController.createRecipe);

router.get('/:url', RecipesController.getSingleRecipeFromUrl);

module.exports = router;