import React from 'react';
import HomePageStyle from './HomePage.module.css'
import {Footer} from "../Footer/Footer";
import {Search} from "../Search/Search";
import {NavHome} from "./NavHome/NavHome";
import {PostsHome} from "./PostsHome/PostsHome";
import {getFirestore, collection, getDocs} from "firebase/firestore";


class HomePage extends React.Component {

    async componentDidMount() {
        const db = getFirestore();
        const data = await getDocs(collection(db, "users"));
        this.props.setPost(data.docs.map(doc => ({ ...doc.data(), id: doc.id })));
    }


    render() {
        return (
            <div className={HomePageStyle.HomePage}>
                <Search/>
                <NavHome/>
                <div className={HomePageStyle.Posts}>
                    <PostsHome getPostId={this.props.getPostId} Posts={this.props.postState}/>
                </div>
                <Footer/>
            </div>
        );
    }
}

export {HomePage};
