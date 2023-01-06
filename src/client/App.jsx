import React from "react";
import { Header } from "./components/Header/index.jsx";
import {
    Outlet, 
} from "react-router-dom";
import './styles.scss'


const App = () => {
    return (
        <>
            <Header />
            <Outlet />
        </>
    )
}

export default App;