import {connect} from "react-redux";
import {Post} from "./Post";


const mapStateToProps = (state) => {
    const Posts = state.homePage.Posts.filter ( elem => elem.open === true);
    return {
        poster: Posts[0].poster,
        avatar: Posts[0].avatar,
        name: Posts[0].name,
        time: Posts[0].time,
        countWatch: Posts[0].countWatch,
        countComment: Posts[0].countComment,
        countLikes: Posts[0].countLikes,
        title: Posts[0].title,
        description: Posts[0].description,
        newComment: Posts[0].newComment,
    }
};

const PostContainer = connect(mapStateToProps)(Post);

export {PostContainer};
