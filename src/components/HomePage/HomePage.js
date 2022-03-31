import React from 'react';
import HomePageStyle from './HomePage.module.css'
import {Footer} from "../Footer/Footer";
import {Search} from "../Search/Search";

const HomePage = () => {
    return (
        <div className={HomePageStyle.HomePage}>
            <Search/>
            <Footer/>
        </div>
    );
};

export {HomePage};