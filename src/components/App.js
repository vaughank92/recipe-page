import React, { useEffect, useState } from 'react';
import sampleRecipes from '../sample-recipe';
import Header from './Header';
import '../css/styles.css';

function App() {

  useEffect(() => {
    fetch("http://localhost:7777/api/recipes")
        .then(res => res.json())
        .then(data => console.log(data))
        .catch(e => console.error(e))
  });

  return (
    <div className="appComponent">
      <Header />
    </div>
  )
}

export default App;
