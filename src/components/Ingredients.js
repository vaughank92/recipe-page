import React from 'react';
import Ingredient from './Ingredient';

const Ingredients = ({ingredientsList}) => {

  const displayIngredients = () => {
    return ingredientsList ?
      Object.keys(ingredientsList).map((key) => {
        const ingObj = ingredientsList[key];
        return <Ingredient
          key={ingObj['ingredient']}
          amount={ingObj['amount']}
          measure={ingObj['measure']}
          ingredient={ingObj['ingredient']} />
        }) : null;
    };

  return (
    <div className="ingredients">
      <h4>Ingredients</h4>
      {displayIngredients()}
    </div>
  )
}

export default Ingredients;
