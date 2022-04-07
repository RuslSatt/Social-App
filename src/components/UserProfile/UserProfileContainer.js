import React from 'react';
import {connect} from "react-redux";
import {UserProfile} from "./UserProfile";


const mapStateToProps = (state) => {
    return {
        teg: state.userProfile.userData.teg,
        name: state.userProfile.userData.name,
        gps: state.userProfile.userData.gps,
        followers: state.userProfile.userData.followers,
        following: state.userProfile.userData.following,
    }
}


const UserProfileContainer = connect(mapStateToProps)(UserProfile);

export {UserProfileContainer};
