import React, { useEffect, useState } from 'react';
import Ingredients from './Ingredients';
import Directions from './Directions';
import sampleRecipes from '../sample-recipe';

const RecipeContainer = (props) =>{
    const recipeId = props.match.params.recipeId;

    const [recipe, setRecipe] = useState({});

    useEffect(() => {
      fetch(`http://localhost:7777/api/recipes/${recipeId}`)
          .then(res => res.json())
          .then(data => setRecipe(data.data))
          .catch(e => console.error(e))
    }, []);

  return (
    <div className="pageContent">
      <Ingredients ingredientsList={recipe.ingredients}/>
      <div className="recipeContainer">
        <h2>{recipe.name}</h2>
        <div className="descriptionBox">
          <h4>Description</h4>
          <div className="description">{recipe.desc}</div>
        </div>
        <Directions directionsList={recipe.directions}/>
      </div>
    </div>
  )
}

export default RecipeContainer;
