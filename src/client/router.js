import React from "react";
import {
    createBrowserRouter,
    Outlet,
} from "react-router-dom";
import { Home } from "./pages/Home/index.jsx";
import { ProductDetails } from "./pages/ProductDetails/index.jsx";
import { Wishlist } from "./pages/Wishlist/index.jsx";
import App from "./App.jsx";

export const router = createBrowserRouter([
    {
        path: "/",
        element:  <><App /><Outlet /></>,
        children: [
            {
                path: "home",
                element: <Home />,
            },
            {
                path: "movies/:movieId",
                element: <ProductDetails />,
            },
            {
                path: "mywishlist",
                element: <Wishlist />,
            },
        ]
    }]);
