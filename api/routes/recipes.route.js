const express = require('express');

const router = express.Router();

const RecipesController = require('../controllers/recipes.controller');

router.get('/', RecipesController.getAllRecipes);

router.post('/tested', RecipesController.createRecipe);

module.exports = router;