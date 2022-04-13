import React from 'react';
import PosterPostHomeStyle from './PosterPostHome.module.css'

const PosterPostHome = (props) => {
    return (
        <div className={PosterPostHomeStyle.Poster}>
            <img src={props.poster} alt="poster"/>
        </div>
    );
};

export {PosterPostHome};
