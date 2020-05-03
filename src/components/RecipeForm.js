import React, { useReducer } from 'react';

const RecipeForm = () => {

    const initialState = {
        title: '',
        source: '',
        desc: '',
        keywords: '',
        ingredients: '',
        directions: ''
    }

    const reducer = (state, {field, value}) => {
        return {
            ...state,
            [field]: value
        }
    }

    const [state, dispatch] = useReducer(reducer, initialState);


    const { title, source, desc, keywords, ingredients, directions } = state;
    
    const onChange = (event) => {
        dispatch({field: event.target.name, value: event.target.value});
    }

    const handleSubmit = (event) => {
        event.preventDefault();
        fetch('http://localhost:7777/api/recipes/create', {
            method: 'POST',
            headers : {
                'Content-Type': 'application/json'
            },
            body:JSON.stringify(state)
        }).then((res) => res.json())
        .then((data) => console.log(data))
        .catch((err) => console.log(err))
    }
    
    return (
        <form className="recipeForm" onSubmit={handleSubmit}>
            <h2>New Recipe Form</h2>
            <div className="name title">
                <label>
                    Title
                </label>
                <input name='title' value={title} id="recipeName" className="recipeName" onChange={onChange}></input>
            </div>
            <div className="source">
                <label>
                    Source Link
                </label>
                <input name="source" value={source} id="recipeSource" className="recipeSource" onChange={onChange}></input>
            </div>
            <div className="description">
                <label>
                    Description
                </label>
                <textarea name="desc" id="recipeDesc" className="recipeDesc" value={desc}
                placeholder="General description, serving count, and other relevant information" onChange={onChange}></textarea>
            </div>
            <div className="keywords">
                <label>
                    Keywords
                </label>
                <input name="keywords" value={keywords} id="recipeKeywords" className="recipeKeywords" onChange={onChange}></input>
            </div>
            <div className="ingredientsList">
                <label>
                    Ingredients
                </label>
                <textarea name="ingredients" value={ingredients} id="recipeIngredients" className="recipeIngredients"
                    placeholder="Place each ingredient on a new line" onChange={onChange}>
                </textarea>
            </div>
            <div className="directions">
                <label>
                    Directions
                </label>
                <textarea name="directions" value={directions} id="recipeDirections" className="recipeDirections"
                    placeholder="Place each step on a new line" onChange={onChange}>
                </textarea>
            </div>
            <button type="submit" className="submit submitRecipe">Submit</button>
        </form>
    )
}

export default RecipeForm;