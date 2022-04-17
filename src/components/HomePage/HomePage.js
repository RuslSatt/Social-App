import React from 'react';
import HomePageStyle from './HomePage.module.css'
import {Footer} from "../Footer/Footer";
import {Search} from "../Search/Search";
import {NavHome} from "./NavHome/NavHome";
import {PostsHome} from "./PostsHome/PostsHome";
import {getFirestore, collection, getDocs, addDoc} from "firebase/firestore";
// import {ref, getStorage, getDownloadURL} from 'firebase/storage'


class HomePage extends React.Component {

    async componentDidMount() {
        const db = getFirestore();
        const querySnapshot = await getDocs(collection(db, "users"));
        querySnapshot.forEach((doc) => {
            const data = doc.data();
            this.props.setPost(data);
        });
    }


    render() {

        const Posts = this.props.postState.map(elem => <PostsHome
            name={elem.name}
            time={elem.time}
            countComment={elem.countComment}
            countLikes={elem.countLikes}
            key={elem.id}
            id={elem.id}
            avatar={elem.avatar}
            poster={elem.poster}
            getPostId={this.props.getPostId}
        />)
        return (
            <div className={HomePageStyle.HomePage}>
                <Search/>
                <NavHome/>
                <div className={HomePageStyle.Posts}>
                    {Posts}
                </div>

                <Footer/>
            </div>
        );
    }
}

export {HomePage};
