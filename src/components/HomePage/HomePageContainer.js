import React from 'react';
import {HomePage} from "./HomePage";
import {connect} from "react-redux";
import {setPost, updateFetching, getPosts} from "../../redux/HomePageReducer";


class HomePageSecondContainer extends React.Component {

    componentDidMount() {
        if (this.props.postState.length === 0) {
            this.props.getPosts();
        }
    }

    render() {
        return <HomePage
            Posts={this.props.postState}
            isFetching={this.props.isFetching}
        />
    }
}


const mapStateToProps = (state) => {
    return {
        postState: state.homePage.Posts,
        isFetching: state.homePage.isFetching
    }
};

const HomePageContainer = connect(mapStateToProps,
    {
        setPost,
        updateFetching,
        getPosts
    })
(HomePageSecondContainer);

export {HomePageContainer};
