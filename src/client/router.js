import React from "react";
import {
    createBrowserRouter,
    Navigate
} from "react-router-dom";
import { Home } from "./pages/Home/index.jsx";
import { ItemDetail } from "./pages/ItemDetail/index.jsx";
import { Wishlist } from "./pages/Wishlist/index.jsx";
import App from "./App.jsx";

export const router = createBrowserRouter([
    {
        element: <App />,
        errorElement: <Navigate to="/home" />,
        children: [
            {
                path: "/",
                element: <Navigate to="/home" />
            },
            {
                path: "home",
                element: <Home />,
                index: true,
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
