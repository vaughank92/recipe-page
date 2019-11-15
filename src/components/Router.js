import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import NotFound from './NotFound';
import App from './App';
import HomeContainer from './HomeContainer';
import RecipeContainer from './RecipeContainer';
import sampleRecipes from '../sample-recipe';

const Router = () => (
  <BrowserRouter>
    <div>
      <App />
      <Switch>
        <Route exact path="/" render={(props) => <HomeContainer recipes={sampleRecipes} />}/>
        <Route exact path="/recipe/:recipeId" component={RecipeContainer}/>
        <Route component={NotFound} />
      </Switch>
    </div>
  </BrowserRouter>
)

export default Router;
