import React from 'react';
import { withRouter } from 'react-router-dom';
import RecipeCard from './RecipeCard';
import Sidebar from './Sidebar';
import '../css/styles.css';

const HomeContainer = (props) => {

    const recipes = props.recipes;

    const goToRecipe = (event) => {
        const recipeUrl = event.currentTarget.id;
        props.history.push({
            pathname: `/recipe/${recipeUrl}`,
            state: {recipeId: recipeUrl}
        });
    };

    const recipeCards = (
        Object.keys(recipes).map((key) => {
            return (
                <RecipeCard
                    details={recipes[key]}
                    recipeClick={goToRecipe}
                    key={key}
                    name={recipes[key].name}
                />
            )
        })
    );
    
    return (
        <div className="pageContent">
            <Sidebar />
            <div className="homeContainer">
                <div className="cards">
                    {recipeCards}
                </div>
            </div>
        </div>  
    )
}

export default withRouter(HomeContainer);