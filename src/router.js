import React from "react";
import {
    createBrowserRouter,
    Outlet,
} from "react-router-dom";
import { Home } from "./pages/Home";
import { ProductDetails } from "./pages/ProductDetails";
import { Wishlist } from "./pages/Wishlist";
import { App } from "./App";

export const router = createBrowserRouter([
    {
        path: "/",
        element: <><App /><Outlet /></>,
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
