import React from 'react';
import PosterPostHomeStyle from './PosterPostHome.module.css'
import Poster from '../../../../assets/images/post-image.png'

const PosterPostHome = () => {
    return (
        <div className={PosterPostHomeStyle.Poster}>
            <img src={Poster} alt=""/>
        </div>
    );
};

export {PosterPostHome};
