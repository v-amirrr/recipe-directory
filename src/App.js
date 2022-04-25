import React from 'react';

import { Routes, Route, Navigate } from 'react-router-dom';

import Nvabar from './components/Nvabar';
import HomePage from './pages/HomePage';

const App = () => {
    return (
        <>

                <Nvabar />

                <Routes>
                    <Route path='/' element={<HomePage />} />
                    <Route path='/*' element={<Navigate to="/" />} />
                </Routes>

        </>
    );
};

export default App;