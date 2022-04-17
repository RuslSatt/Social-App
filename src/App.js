import './App.css';
import './normalize.css'
import './fonts.css'
import {Routes, Route} from 'react-router-dom';
import {StartPage} from "./components/StartPage/StartPage";
import {HomePageContainer} from "./components/HomePage/HomePageContainer";
import {PostContainer} from "./components/Post/PostContainer";
import {MessageContainer} from "./components/Message/MessageContainer";
import {ChatMessageContainer} from "./components/Message/ChatMessage/ChatMessageContainer";
import {UserProfileContainer} from "./components/UserProfile/UserProfileContainer";

function App(props) {
    return (
        <div className="App">
            <div className="App__container">
                <Routes>
                    <Route path='/social-app' element={<StartPage/>}/>
                    <Route path='home' element={<HomePageContainer/>}/>
                    <Route path='post' element={<PostContainer/>}/>
                    <Route path='message' element={<MessageContainer/>}/>
                    <Route path='user-chat' element={<ChatMessageContainer/>}/>
                    <Route path='user-profile' element={<UserProfileContainer/>}/>
                </Routes>
            </div>
        </div>
    );
}

export default App;
