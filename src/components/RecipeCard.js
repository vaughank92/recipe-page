import React from 'react';

const RecipeCard = ({name, recipeClick, details}) => {

    const keywords = details.keywords;

    let keywordList = keywords.map((word, index) => {
        return <span key={index}>{word} </span> })
    return (
        <div id={details.url} className="recipeCard" onClick={recipeClick}>
            <span className="recipeTitle">{name}</span>
            <div className="recipeDesc">
                {details.desc}
            </div>
            <div className="recipeKeys">
                { keywordList }
            </div>
        </div>

    )
}

export default RecipeCard;
