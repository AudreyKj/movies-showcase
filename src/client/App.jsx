import React from "react";
import { Header } from "./components/Header/index.jsx";
import {
    Outlet,
} from "react-router-dom";
import './main.scss';


const App = () => {
    return (
        <>
            <Header />
            <section className="pages-content">
                <Outlet />
            </section>
        </>
    )
}

export default App;