import './App.css';
import './normalize.css'
import './fonts.css'
import {Routes, Route} from 'react-router-dom';
import {HomePageContainer} from "./components/HomePage/HomePageContainer";
import {PostContainer} from "./components/Post/PostContainer";
import {MessageContainer} from "./components/Message/MessageContainer";
import {ChatMessageContainer} from "./components/Message/ChatMessage/ChatMessageContainer";
import {UserProfileContainer} from "./components/UserProfile/UserProfileContainer";
import {StartPage} from "./components/StartPage/StartPage";
import {SignIn} from "./components/Auth/SignIn/SignIn";
import {SignUp} from "./components/Auth/SignUp/SignUp";
import { SettingProfile } from './components/SettingProfile/SettingProfile';


function App() {
    return (
        <div className="App">
            <div className="App__container">
                <Routes>
                    <Route path='/setting-profile' element={<SettingProfile/>}/>
                    <Route path='/auth' element={<SignIn/>}/>
                    <Route path='/signup' element={<SignUp/>}/>
                    <Route path='/social-app' element={<StartPage/>}/>
                    <Route path='home' element={<HomePageContainer/>}/>
                    <Route path='/post/:postId' element={<PostContainer/>}/>
                    <Route path='message' element={<MessageContainer/>}/>
                    <Route path='user-chat' element={<ChatMessageContainer/>}/>
                    <Route path='user-profile' element={<UserProfileContainer/>}/>
                </Routes>
            </div>
        </div>
    );
}

export default App;
