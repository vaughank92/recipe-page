import React from 'react';
import '../css/styles.css';
import RecipeCard from './RecipeCard';
import { withRouter } from 'react-router-dom';

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
                <div className="cardContainer">
                    <div className="cards">
                        {this.recipeCards()}
                        {this.recipeCards()}
                        {this.recipeCards()}
                    </div>
                </div>
            </div>
        )
    }
}

export default withRouter(HomeContainer);