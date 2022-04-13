import {HomePage} from "./HomePage";
import {connect} from "react-redux";
import {postIdActionCreator} from "../../redux/HomePageReducer";

const mapStateToProps = (state) => {
    return {
        postState: state.homePage.Posts,
    }
};

const mapDispatchToProps = (dispatch) => {
    return {
        getPostId: (postId) => {
            dispatch(postIdActionCreator(postId))
        }
    }
}

const HomePageContainer = connect(mapStateToProps, mapDispatchToProps)(HomePage);

export {HomePageContainer};