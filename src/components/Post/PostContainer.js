import {connect} from "react-redux";
import {getPosts, getCommentPosts} from "../../redux/HomePageReducer";
import {Post} from "./Post";

const mapStateToProps = (state) => {
    return {
        Posts: state.homePage.Posts,
    }
};

const PostContainer = connect(mapStateToProps, {
    getPosts,
    getCommentPosts,
})(Post);

export {PostContainer};




