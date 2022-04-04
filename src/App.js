import './App.css';
import './normalize.css'
import './fonts.css'
import {Routes, Route} from 'react-router-dom';
import {StartPage} from "./components/StartPage/StartPage";
import {HomePage} from "./components/HomePage/HomePage";
import {Post} from "./components/Post/Post";
import {Message} from "./components/Message/Message";
import {ChatMessage} from "./components/Message/ChatMessage/ChatMessage";

function App(props) {
    return (
        <div className="App">
            <Routes>
                <Route path='/social-app' element={<StartPage/>}/>
                <Route path='home' element={<HomePage postState={props.appState.homePage.Posts}/>}/>
                <Route path='post' element={<Post postState={props.appState.homePage.Posts[0]}
                                                  store={props.store}
                                                  newComment={props.appState.homePage.newComment}/>}/>
                <Route path='message' element={<Message messageState={props.appState.messagePage.Message}/>}/>
                <Route path='user-chat' element={<ChatMessage store={props.store}
                                                              newMessage={props.appState.messagePage.newMessage}/>}/>
            </Routes>
        </div>
    );
}

export default App;
