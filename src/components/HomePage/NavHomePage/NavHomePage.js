import React from 'react';
import NavHomePageStyle from './NavHomePage.module.css'
import {NavLink} from "react-router-dom";

const NavHomePage = () => {
    return (
        <div className={NavHomePageStyle.NavHome}>
            <NavLink className={`${NavHomePageStyle.button} ${NavHomePageStyle.active__button}`} to='/Popular'>
                <button className={`${NavHomePageStyle.btn} ${NavHomePageStyle.active__btn}`}>
                    Popular
                </button>
            </NavLink>
            <NavLink className={NavHomePageStyle.button} to='/Popular'>
                <button className={NavHomePageStyle.btn}>
                    Trending
                </button>
            </NavLink>
            <NavLink className={NavHomePageStyle.button} to='/Popular'>
                <button className={NavHomePageStyle.btn}>
                    Following
                </button>
            </NavLink>
        </div>
    );
};

export {NavHomePage};
