const mongoose = require('mongoose');
mongoose.Promise = global.Promise;
const mongoosePaginate = require('mongoose-paginate');

let RecipeSchema = new mongoose.Schema({
    name: String,
    url: String,
    image: String,
    desc: String,
    source: String,
    keywords: Array,
    ingredients: [
        {
            ingredient: String,
            amount: String,
            measure: String
        }
    ],
    directions: Array
});

RecipeSchema.plugin(mongoosePaginate);
const Recipe = mongoose.model('Recipe', RecipeSchema);

module.exports = Recipe;