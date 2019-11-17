import React from 'react';
import { withRouter } from 'react-router-dom';
import RecipeCard from './RecipeCard';
import '../css/styles.css';

class HomeContainer extends React.Component {

    goToRecipe = (event) => {
        const recipeUrl = event.currentTarget.id;
        this.props.history.push({
            pathname: `/recipe/${recipeUrl}`,
            state: {recipeId: recipeUrl}
        });
    }

    recipeCards = () => {
        const recipes = this.props.recipes;
        return Object.keys(recipes).map((key) => {
            return (
            <RecipeCard 
                details={recipes[key]} 
                recipeClick={this.goToRecipe} 
                key={key} 
                name={recipes[key].name} 
            />
            )
        })
    }
    
    render() {
        return(
            <div className="homeContainer">
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