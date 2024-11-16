import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from '../pages/Home';
import About from '../pages/About';
import SignUp from '../pages/SignUp';
import GamesPage from '../pages/GamesPage';

function RoutesConfig() {
    return(
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/games" element={<GamesPage />} />
            <Route path="/about" element={<About />} />
            <Route path="/signup" element={<SignUp />} />
            <Route path="*" element={<h2>Página não encontrada</h2>} />
        </Routes>
    )
}

export default RoutesConfig;