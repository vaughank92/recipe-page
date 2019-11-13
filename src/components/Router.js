import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import NotFound from './NotFound';
import App from './App';
import RecipeContainer from './RecipeContainer';

const Router = () => (
  <BrowserRouter>
    <Switch>
      <Route exact path="/" component={App}/>
      <Route exact path="/recipe/:recipeId" component={RecipeContainer}/>
      <Route component={NotFound} />
    </Switch>
  </BrowserRouter>
)

export default Router;
