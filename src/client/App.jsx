import React from "react";
import {Header} from "./components/Header/index.jsx";
import {Home} from "./pages/Home/index.jsx";
import './styles.scss'


const App = () => {
    return (
        <>
        <Header />
        <Home />
        </>
    )
}

export default App;