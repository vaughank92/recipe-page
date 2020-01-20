import React, { useEffect, useState } from 'react';
import Ingredients from './Ingredients';
import Directions from './Directions';
import sampleRecipes from '../sample-recipe';

const RecipeContainer = (props) =>{
    const recipeId = props.match.params.recipeId;

    const [recipe, setSingleRecipe] = useState({});

    useEffect(() => {
      fetch(`http://localhost:7777/api/recipes/${recipeId}`)
          .then(res => res.json())
          .then(data => setSingleRecipe(data.data))
          .catch(e => console.error(e))
    }, []);

  return (
    <div className="pageContent">
      <Ingredients ingredientsList={recipe.ingredients}/>
      <div className="recipeContainer">
        <h2>{recipe.name}</h2>
        <Directions directionsList={recipe.directions}/>
      </div>
    </div>
  )
}

export default RecipeContainer;
