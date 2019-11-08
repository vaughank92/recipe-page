import React from 'react';
import '../css/styles.css';
import RecipeCard from './RecipeCard';

class HomeContainer extends React.Component {


    recipeCards = () => {
        console.log(this.props.recipes);
        const recipes = this.props.recipes;
        return Object.keys(recipes).map(key =>
            <RecipeCard key={key} name={recipes[key].name}/>
        )
    }
    
    render() {
        // console.log(this.props.recipes);
        return(
            <div className="homeContainer">
                HomeContainer
                {this.recipeCards()}
            </div>
        )
    }
}

export default HomeContainer;