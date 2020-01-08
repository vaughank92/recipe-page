const express = require('express');

const router = express.Router();

const recipes = require('./recipes.route');

router.use('/recipes', recipes);

module.exports = router;