import React from 'react';
import HeaderPostHomeStyle from './HeaderPostHome.module.css'

const HeaderPostHome = (props) => {
    return (
        <div className={HeaderPostHomeStyle.HeaderPost}>
            <div className={HeaderPostHomeStyle.user}>
                <img src={props.avatar} alt="avatar"/>
                <p>
                    {props.name}
                </p>
            </div>
            <p className={HeaderPostHomeStyle.time}>
                {props.time}
            </p>
        </div>
    );
};

export {HeaderPostHome};
