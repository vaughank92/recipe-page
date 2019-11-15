import React from 'react';
import Ingredients from './Ingredients';
import Directions from './Directions';
import sampleRecipes from '../sample-recipe';

class RecipeContainer extends React.Component {
  render() {

    const recipeId = this.props.match.params.recipeId;

    const recipe = sampleRecipes.find(function(recipe) {
        return recipe.url == recipeId;
      }
    )

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
