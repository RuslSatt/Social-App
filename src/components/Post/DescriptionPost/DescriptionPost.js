import React from 'react';
import DescriptionPostStyle from './DescriptionPost.module.css'

const DescriptionPost = (props) => {
    return (
        <div className={DescriptionPostStyle.Description}>
            <h2 className={DescriptionPostStyle.title}>
                {props.title}
            </h2>
            <p className={DescriptionPostStyle.subtitle}>
                {props.description}
            </p>
        </div>
    );
};

export {DescriptionPost};
