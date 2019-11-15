import React from 'react';
import '../css/styles.css';
import sampleRecipes from '../sample-recipe';
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
      </div>
    )
  }
}

export default App;
