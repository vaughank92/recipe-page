import React from 'react';

const Ingredient = ({amount, measure, ingredient}) => {
    return (
        <ul>
            <span className="amount">{amount} </span>
            <span className="measure">{measure} </span>
            <span className="ingredient">{ingredient} </span>
        </ul>
    )
}

export default Ingredient;