import React from 'react';
import sampleRecipes from '../sample-recipe';
import Header from './Header';
import '../css/styles.css';

class App extends React.Component {

  apiCheck() {
    fetch("http://localhost:7777/api/recipes")
        .then(res => res.json())
        .then(data => console.log(data))
        .catch(e => console.error(e))
  }

  state = {
    recipes: sampleRecipes,
  };

  componentDidMount() {
    this.apiCheck();
  }

  render() {

    return (
      <div className="appComponent">
        <Header />
      </div>
    )
  }
}


export default App;
