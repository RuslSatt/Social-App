import React from 'react';
import HomePageStyle from './HomePage.module.css'
import {Footer} from "../Footer/Footer";
import {Search} from "../Search/Search";
import {NavHomePage} from "./NavHomePage/NavHomePage";

const HomePage = () => {
    return (
        <div className={HomePageStyle.HomePage}>
            <Search/>
            <NavHomePage/>
            <Footer/>
        </div>
    );
};

export {HomePage};