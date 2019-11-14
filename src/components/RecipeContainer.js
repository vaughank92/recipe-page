import React from 'react';
import Ingredients from './Ingredients';
import Directions from './Directions';
import sampleRecipes from '../sample-recipe';

class RecipeContainer extends React.Component {
  render() {

    // console.log(this.props.match.params.recipeId);
    const recipeId = this.props.match.params.recipeId;
    console.log(sampleRecipes[0]);

    return(
      <div className="recipeContainer">
        <div>This is the Container</div>
        <Ingredients />
        <Directions />
      </div>
    )
  }
}

export default RecipeContainer;
