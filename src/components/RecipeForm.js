import React from 'react';

const RecipeForm = () => {
    return (
        <form className="recipeForm">
            <h2>New Recipe Form</h2>
            <div className="name">
                <label for="recipeName">
                    Title
                </label>
                <input id="recipeName" className="recipeTitle"></input>
            </div>
            <div className="source">
                <label for="recipeSource">
                    Source Link
                </label>
                <input id="recipeSource" className="recipeSource"></input>
            </div>
            <div className="description">
                <label for="recipeDesc">
                    Description
                </label>
                <textarea id="recipeDesc" className="recipeDesc"
                placeholder="General description, serving count, and other relevant information"></textarea>
            </div>
            <div className="keywords">
                <label for="recipeKeywords">
                    Keywords
                </label>
                <input id="recipeKeywords" className="recipeKeywords"></input>
            </div>
            <div className="ingredientsList">
                <label for="recipeIngredients">
                    Ingredients
                </label>
                <textarea id="recipeIngredients" className="recipeIngredients"
                    placeholder="Place each ingredient on a new line">
                </textarea>
            </div>
            <div className="directions">
                <label for="recipeDirections">
                    Directions
                </label>
                <textarea id="recipeDirections" className="recipeDirections"
                    placeholder="Place each step on a new line">
                </textarea>
            </div>
            <button type="submit" className="submit submitRecipe">Submit</button>
        </form>
    )
}

export default RecipeForm;