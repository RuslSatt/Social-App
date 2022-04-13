import React from 'react';
import ShotsUserProfileStyle from './ShotsUserProfile.module.css';
import Nothing from '../../../assets/images/nothing.png';

const ShotsUserProfile = (props) => {
    let shots = props.shots;
    return (
        <div className={ShotsUserProfileStyle.Shot}>
            {shots.length > 0 ?
                shots.map((elem) => <div key={elem.id}>

                </div>) : <div className={ShotsUserProfileStyle.image}>
                    <img src={Nothing} alt="nothing"/>
                </div>
            }
        </div>
    );
};

export {ShotsUserProfile};
