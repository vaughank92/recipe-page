import React, { useEffect, useState } from 'react';
import SideBar from './Sidebar';
import RecipeForm from './RecipeForm';

const RecipeFormContainer = () => {
    return (
        <div className="pageContent">
            <SideBar/>
            <RecipeForm/>
        </div>
    )
}

export default RecipeFormContainer;