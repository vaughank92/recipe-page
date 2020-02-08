import React from 'react';

const RecipeCard = (props) => {
    
    const {name, recipeClick, details } = props;
    const keywords = details.keywords;

    let keyDom = keywords.map((word, index) => {
        return <span key={index}>{word} </span> })
    return (
        <div id={details.url} className="recipeCard" onClick={recipeClick}>
            <span className="recipeTitle">{name}</span>
            <div className="recipeDesc">
                {details.desc}
            </div>
            <div className="recipeKeys">
                { keyDom }
            </div>
        </div>

    )
}

export default RecipeCard;
