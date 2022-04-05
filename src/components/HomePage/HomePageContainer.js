import React from 'react';
import {HomePage} from "./HomePage";
import {connect} from "react-redux";

const mapStateToProps = (state) => {
    return {
        postState: state.homePage.Posts,
    }
};

const HomePageContainer = connect(mapStateToProps)(HomePage);

export {HomePageContainer};