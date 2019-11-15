import React from 'react';
import RecipeContainer from './RecipeContainer';
import '../css/styles.css';
import HomeContainer from './HomeContainer';
import sampleRecipes from '../sample-recipe';
import '../css/styles.css';

class App extends React.Component {

  state = {
    recipes: sampleRecipes,
  };

  

  render() {

    return (
      <div className="appComponent">
        <div>Recipes</div>
        <HomeContainer recipes={this.state.recipes}/>
      </div>
    )
  }
}

export default App;
