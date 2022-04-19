import React from 'react';
import {HomePage} from "./HomePage";
import {connect} from "react-redux";
import {getPostId, setPost, updateFetching} from "../../redux/HomePageReducer";
import {getFirestore, collection, getDocs} from "firebase/firestore";


class HomePageSecondContainer extends React.Component {

    async componentDidMount() {
        if (this.props.postState.length === 0) {
            this.props.updateFetching(true);
            const db = getFirestore();
            const data = await getDocs(collection(db, "users"));
            this.props.setPost(data.docs.map(doc => ({...doc.data(), id: doc.id})));
            this.props.updateFetching(false)
        }
    }

    render() {
        return <HomePage
            getPostId={this.props.getPostId}
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
        getPostId,
        updateFetching,
    })
(HomePageSecondContainer);

export {HomePageContainer};
