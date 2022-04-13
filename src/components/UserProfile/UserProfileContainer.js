import React from 'react';
import {connect} from "react-redux";
import {UserProfile} from "./UserProfile";


const mapStateToProps = (state) => {
    return {
        tag: state.userProfile.userData.tag,
        name: state.userProfile.userData.name,
        location: state.userProfile.userData.location,
        followers: state.userProfile.userData.followers,
        following: state.userProfile.userData.following,
        shots: state.userProfile.userData.shots,
        collections: state.userProfile.userData.collections,
    }
}


const UserProfileContainer = connect(mapStateToProps)(UserProfile);

export {UserProfileContainer};
