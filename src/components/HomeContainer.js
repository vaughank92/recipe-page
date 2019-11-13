import React from 'react';
import '../css/styles.css';
import RecipeCard from './RecipeCard';
import { withRouter } from 'react-router-dom';

class HomeContainer extends React.Component {

    goToRecipe = (event) => {
        console.log(event.currentTarget.id);
        const recipeUrl = event.currentTarget.id;
        debugger;
        this.props.history.push(`/recipe/${recipeUrl}`);
    }

    recipeCards = () => {
        // console.log(this.props.recipes);
        // console.log(this.goToRecipe());
        const recipes = this.props.recipes;
        return Object.keys(recipes).map(key =>
            <RecipeCard details={recipes[key]} recipeClick={this.goToRecipe} key={key} name={recipes[key].name}/>
        )
    }
    
    render() {
        // console.log(this.props.recipes);
        return(
            <div className="homeContainer">
                HomeContainer
                <div className="cards">
                    {this.recipeCards()}
                    {this.recipeCards()}
                    {this.recipeCards()}
                </div>
            </div>
        )
    }
}

export default withRouter(HomeContainer);