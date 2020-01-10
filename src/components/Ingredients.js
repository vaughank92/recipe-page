import React from 'react';
import Ingredient from './Ingredient';

class Ingredients extends React.Component {

  extractIngredient = (ingredientsList) => {
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


  render() {
    return (
      <div className="ingredients">
        <h4>Ingredients</h4>
        {this.extractIngredient(this.props.ingredientsList)}
      </div>
    )
  }
}

export default Ingredients;
