import React from 'react';
import samplerecipe from '../sample-recipe';


const RecipeCard = (props) => {
    const name = props.name;
    const goToRecipe = props.recipeClick;
    return (
        <div id={props.details.url} className="recipeCard" onClick={goToRecipe}>
            <span>{name}</span>
        </div>

    )
}

export default RecipeCard;
