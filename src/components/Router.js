import React, { useState, useEffect } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import NotFound from './NotFound';
import App from './App';
import HomeContainer from './HomeContainer';
import RecipeContainer from './RecipeContainer';
import Sidebar from './Sidebar';
import sampleRecipes from '../sample-recipe';



const Router = () => {
  const [recipes, setRecipes] = useState({});

  useEffect(() => {
      fetch(`http://localhost:7777/api/recipes`)
          .then(res => res.json())
          .then(data => setRecipes(data.data.docs))
          .catch(e => console.error(e))
  }, []);

  return (
    <BrowserRouter>
        <div>
          <App />
          <Switch>
            <Route exact path="/" render={(props) => <HomeContainer recipes={recipes} />}/>
            <Route exact path="/recipe/:recipeId" component={RecipeContainer}/>
            <Route component={NotFound} />
          </Switch>
        </div>
      </BrowserRouter>
  )

  
}

export default Router;
