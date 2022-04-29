import {connect} from "react-redux";
import {setPost, setComment} from "../../redux/HomePageReducer";
import {Post} from "./Post";

const mapStateToProps = (state) => {
    return {
        Posts: state.homePage.Posts,
    }
};

const PostContainer = connect(mapStateToProps, {
    setComment,
    setPost,
})(Post);

export {PostContainer};




