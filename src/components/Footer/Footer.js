import React from 'react';
import FooterStyle from './Footer.module.css'
import {ReactComponent as HomeIcon} from '../../assets/images/Home.svg'
import {ReactComponent as CategoryIcon} from '../../assets/images/Category.svg'
import {ReactComponent as IconLy} from '../../assets/images/Iconly.svg'
import {ReactComponent as ProfileIcon} from '../../assets/images/Profile.svg'
import {ReactComponent as BtnIcon} from '../../assets/images/btnAdd.svg'
import {NavLink} from "react-router-dom";


const Footer = () => {
    return (
        <div className={FooterStyle.Footer}>
            <NavLink to='/home'>
                <HomeIcon/>
            </NavLink>
            <NavLink to='/category'>
                <CategoryIcon/>
            </NavLink>
            <NavLink to='/add'>
                <BtnIcon className={FooterStyle.btnAdd}/>
            </NavLink>
            <NavLink to='/iconly'>
                <IconLy/>
            </NavLink>
            <NavLink to='/profile'>
                <ProfileIcon/>
            </NavLink>

        </div>
    );
};

export {Footer};
