const mongoose = require('mongoose');
mongoose.Promise = global.Promise;
const mongoosePaginate = require('mongoose-paginate');

let RecipeSchema = new mongoose.Schema({
    name: { type: String, required: true },
    url: { type: String, required: true },
    image: String,
    desc: String,
    source: String,
    keywords: { type: Array, required: true }, 
    ingredients: [
        {
            ingredient: { type: String, required: true },
            amount: { type: String, required: true },
            measure: { type: String, required: true }
        }
    ],
    directions: { type: Array, required: true }
});

RecipeSchema.plugin(mongoosePaginate);
const Recipe = mongoose.model('Recipe', RecipeSchema);

module.exports = Recipe;