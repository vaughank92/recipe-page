import React from 'react';
import Ingredient from './Ingredient';

class Ingredients extends React.Component {

  extractIngredient = (ingredientsList) => {
    console.log(ingredientsList);
    /**
     * create a new array of strings of extracted ingredients
     * map over that array and return ingredient list
     * 
     */
    // let ingredientArray = [];
    // ingredientArray = ingredientsList.map(function(ing) {
    //   return `${ing['amount']} ${ing['measure']} ${ing['ingredient']}`
    // });
    // console.log(ingredientArray);
    // return Object.keys(ingredientArray).map(key =>
    //   <Ingredient ingredientString={ingredientArray[key]} />);

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
