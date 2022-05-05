import React from 'react';

import { Routes, Route, Navigate, useNavigate, useLocation } from 'react-router-dom';

import { AnimatePresence } from 'framer-motion';

import Nvabar from './components/Nvabar';
import HomePage from './pages/HomePage';
import RecipeDetails from "./components/RecipeDetails";
import BuildRecipe from './components/BuildRecipe';

const App = () => {
    const location = useLocation();
    return (
        <>
                <Nvabar />

                <AnimatePresence>
                    <Routes location={location} key={location.key}>
                        <Route path='/' element={<HomePage />} />
                        <Route path='/recipe/:id' element={<RecipeDetails />} />
                        <Route path='/build-recipe' element={<BuildRecipe />} />
                        <Route path='/*' element={<Navigate to="/" />} />
                    </Routes>
                </AnimatePresence>
        </>
    );
};

export default App;