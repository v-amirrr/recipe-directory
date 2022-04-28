import React from 'react';

import { Routes, Route, Navigate } from 'react-router-dom';

import Nvabar from './components/Nvabar';
import HomePage from './pages/HomePage';
import RecipeDetails from "./components/RecipeDetails";

const App = () => {
    return (
        <>

                <Nvabar />

                <Routes>
                    <Route path='/' element={<HomePage />} />
                    <Route path='/recipe/:id' element={<RecipeDetails />} />
                    <Route path='/*' element={<Navigate to="/" />} />
                </Routes>

        </>
    );
};

export default App;