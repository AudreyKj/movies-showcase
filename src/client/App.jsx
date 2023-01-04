import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
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