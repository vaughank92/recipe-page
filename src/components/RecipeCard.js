import React from 'react';

const RecipeCard = (props) => {
    const name = props.name;
    const goToRecipe = props.recipeClick;
    console.log(props);
    return (
        <div id={props.details.url} className="recipeCard" onClick={goToRecipe}>
            <span className="recipeTitle">{name}</span>
            <div className="recipeDesc">
                {props.details.desc}
            </div>
            <div className="recipeKeys">
                {props.details.keywords}
            </div>
        </div>

    )
}

export default RecipeCard;
