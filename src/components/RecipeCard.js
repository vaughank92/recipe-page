import React from 'react';
import samplerecipe from '../sample-recipe';

const RecipeCard = (props) => {
    const name = props.name;
    console.log(name);
    return (
        <div className="recipeCard">
            <div>RecipeCard</div>
            <span>{name}</span>
        </div>
        
    )
}

export default RecipeCard;
