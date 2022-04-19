import React from 'react';
import PreloadImage from "../../../assets/preload/Spinner-2.gif"

const Preload = () => {
    return (
        <div style={{
                height: "100%",
                overflow: "hidden",
                display: 'flex',
                paddingTop: 50,
                justifyContent: 'center',
            }}>
            <img style={{
                width: 50,
                height: 50,
            }} src={PreloadImage} alt=""/>
        </div>
    );
};

export {Preload};
