import React from 'react';

const RecipeCard = (props) => {
    const name = props.name;
    const goToRecipe = props.recipeClick;
    const keywords = props.details.keywords;

    let keyDom = keywords.map((word, index) => {
        return <span key={index}>{word} </span> })
    return (
        <div id={props.details.url} className="recipeCard" onClick={goToRecipe}>
            <span className="recipeTitle">{name}</span>
            <div className="recipeDesc">
                {props.details.desc}
            </div>
            <div className="recipeKeys">
                { keyDom }
            </div>
        </div>

    )
}

export default RecipeCard;
