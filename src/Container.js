import React from 'react';
import ChangeTheme from "./components/ChangeTheme";
import ChangeLang from "./components/ChangeLang";
import Footer from "./components/Footer";
import {useTheme} from "./contexts/ThemeContext";
import './App.css'

function Container() {
    const {theme} = useTheme()
    return (
        <div className={`container ${theme}`}>
            <ChangeTheme/>
            <ChangeLang/>
            <Footer/>
        </div>
    );
}

export default Container;