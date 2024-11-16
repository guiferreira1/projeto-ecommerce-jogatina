import React from 'react';
import Home from '../pages/Home';
import SignUp from '../pages/SignUp';
import GamesPage from '../pages/GamesPage';

import { createBrowserRouter } from "react-router-dom";

export const router = createBrowserRouter([
    {
        path: "/",
        element: <Home />,
    },
    {
        path: "/games",
        element: <GamesPage />,
    },
    {
        path: "/signup",
        element: <SignUp />,
    },
]);