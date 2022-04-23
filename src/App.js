import React from 'react';

import { Routes, Route, Navigate } from 'react-router-dom';

import Nvabar from './components/Nvabar';
import HomePgae from './pages/HomePgae';

const App = () => {
    return (
        <>
            <Nvabar />

            <Routes>
                <Route path='/' element={<HomePgae />} />
                <Route path='/*' element={<Navigate to="/" />} />
            </Routes>
        </>
    );
};

export default App;