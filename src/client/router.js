import React from "react";
import {
    createBrowserRouter,
    Outlet,
} from "react-router-dom";
import { Home } from "./pages/Home/index.jsx";
import { ItemDetail } from "./pages/ItemDetail/index.jsx";
import { Wishlist } from "./pages/Wishlist/index.jsx";
import App from "./App.jsx";

export const router = createBrowserRouter([
    {
        path: "/",
        element: <App />,
        children: [
            {
                path: "home",
                element: <Home />,
            },
            {
                path: "movies/:movieId",
                element: <ItemDetail />,
            },
            {
                path: "mywishlist",
                element: <Wishlist />,
            },
        ]
    }]);
