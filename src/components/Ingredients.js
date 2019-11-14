import React from 'react';
import Ingredient from './Ingredient';

class Ingredients extends React.Component {

  extractIngredient = (ingredientsList) => {
    console.log(ingredientsList);

    return Object.keys(ingredientsList).map(function(key){
      const ingObj = ingredientsList[key];
      return <Ingredient
        key={ingObj['ingredient']}
        amount={ingObj['amount']}
        measure={ingObj['measure']}
        ingredient={ingObj['ingredient']} />
      })
    };


  render() {

    // console.log(this.props);

    // this.extractIngredient(this.props.ingredientsList);
  
    return(
      <div className="ingredients">
        <span>Here is an ingredient list</span>
        {this.extractIngredient(this.props.ingredientsList)}
      </div>
    )
  }
}

export default Ingredients;
