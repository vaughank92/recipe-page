import React from 'react';

const RecipeForm = () => {
    return (
        <form className="recipeForm">
            <h4>New Recipe Form</h4>
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
                <textarea id="recipeDesc" className="recipeDesc"></textarea>
            </div>
            <div className="keywords">
                <label for="recipeKeywords">
                    Keywords
                </label>
                <input id="recipeKeywords" className="recipeKeywords"></input>
            </div>
            <div className="ingredientsList">
            ingredients
            </div>
            <div className="directions">
                <label for="recipeDirections">
                    Directions
                </label>
                <textarea id="recipeDirections" className="recipeDirections"></textarea>
            </div>
            <button>Submit</button>
        </form>
    )
}

export default RecipeForm;