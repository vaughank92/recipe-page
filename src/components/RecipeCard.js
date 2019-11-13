import React from 'react';
import samplerecipe from '../sample-recipe';
import { withRouter } from 'react-router-dom';

const RecipeCard = (props) => {
    const name = props.name;
    const goToRecipe = props.recipeClick;
    console.log(goToRecipe);
    return (
        <div id={props.details.url} className="recipeCard" onClick={goToRecipe}>
            <span>{name}</span>
        </div>
        
    )
}

export default RecipeCard;
