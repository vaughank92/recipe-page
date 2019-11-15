import React from 'react';
import RecipeContainer from './RecipeContainer';
import '../css/styles.css';
import HomeContainer from './HomeContainer';
import sampleRecipes from '../sample-recipe';
import Sidebar from './Sidebar';
import Header from './Header';
import '../css/styles.css';

class App extends React.Component {

  state = {
    recipes: sampleRecipes,
  };

  render() {

    return (
      <div className="appComponent">
        <Header />
        <Sidebar />
      </div>
    )
  }
}

export default App;
