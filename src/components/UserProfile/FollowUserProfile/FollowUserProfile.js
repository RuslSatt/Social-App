import React from 'react';
import FollowUserProfileStyle from './FollowUserProfile.module.css'

const FollowUserProfile = (props) => {
    return (
        <div className={FollowUserProfileStyle.Follow}>
            <div className={FollowUserProfileStyle.follow__body}>
                <div className={FollowUserProfileStyle.followers}>
                <span className={FollowUserProfileStyle.count}>
                    {props.followers}
                </span>
                    <span className={FollowUserProfileStyle.text}>
                        Followers
                    </span>
                </div>
                <div className={FollowUserProfileStyle.following}>
                <span className={FollowUserProfileStyle.count}>
                    {props.following}
                </span>
                    <span className={FollowUserProfileStyle.text}>
                        Following
                    </span>
                </div>
            </div>
        </div>
    );
};

export {FollowUserProfile};
