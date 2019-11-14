import React from 'react';
import Ingredients from './Ingredients';
import Directions from './Directions';
import sampleRecipes from '../sample-recipe';

class RecipeContainer extends React.Component {
  render() {

    // console.log(this.props.match.params.recipeId);
    const recipeId = this.props.match.params.recipeId;
    // console.log(sampleRecipes);

    const recipe = sampleRecipes.find(function(recipe) {
        console.log(recipeId);
        return recipe.url == recipeId;
      }
    )

    console.log(recipe);

    return(
      <div className="recipeContainer">
        <div>This is the Container</div>
        <Ingredients ingredientsList={recipe.ingredients}/>
        <Directions directionsList={recipe.directions}/>
      </div>
    )
  }
}

export default RecipeContainer;
