import React from 'react';

import { Routes, Route, Navigate } from 'react-router-dom';

import Nvabar from './components/Nvabar';
import HomePage from './pages/HomePage';
import RecipeDetails from "./components/RecipeDetails";
import BuildRecipe from './components/BuildRecipe';

const App = () => {
    return (
        <>

                <Nvabar />

                <Routes>
                    <Route path='/' element={<HomePage />} />
                    <Route path='/recipe/:id' element={<RecipeDetails />} />
                    <Route path='/build-recipe' element={<BuildRecipe />} />
                    <Route path='/*' element={<Navigate to="/" />} />
                </Routes>

        </>
    );
};

export default App;