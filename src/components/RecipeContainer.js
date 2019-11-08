import React from 'react';
import Ingredients from './Ingredients';
import Directions from './Directions';

class RecipeContainer extends React.Component {
  render() {
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
