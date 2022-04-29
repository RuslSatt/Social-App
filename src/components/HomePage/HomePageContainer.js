import React from 'react';
import {HomePage} from "./HomePage";
import {connect} from "react-redux";
import {setPost, updateFetching} from "../../redux/HomePageReducer";
import {getFirestore, collection, getDocs} from "firebase/firestore";


class HomePageSecondContainer extends React.Component {

    componentDidMount() {
        if (this.props.postState.length === 0) {
            const fetch = async () => {
                this.props.updateFetching(true);
                const db = getFirestore();
                const data = await getDocs(collection(db, "users"));
                this.props.setPost(data.docs.map(doc => ({...doc.data(), id: doc.id})));
            }
            fetch().then( () => this.props.updateFetching(false));
        }
    }

    render() {
        return <HomePage
            Posts={this.props.postState}
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
    })
(HomePageSecondContainer);

export {HomePageContainer};
