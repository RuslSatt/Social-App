import React from 'react';
import {connect} from "react-redux";
import {Post} from "./Post";


const mapStateToProps = (state) => {
    return {
        postState: state.homePage.Posts[0],
        newComment: state.homePage.newComment,
    }
};

const PostContainer = connect(mapStateToProps)(Post);

export {PostContainer};
