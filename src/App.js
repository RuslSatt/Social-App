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
                <Route path='home' element={<HomePage postState={props.appState.HomePage.Posts}/>}/>
                <Route path='post' element={<Post postState={props.appState.HomePage.Posts[0]}
                                                  newCommentText={props.appState.HomePage.newCommentText}
                                                  dispatch={props.dispatch}
                                                  newComment={props.appState.HomePage.newComment}/>}/>
                <Route path='message' element={<Message messageState={props.appState.MessagePage.Message}/>}/>
                <Route path='user-chat' element={<ChatMessage dispatch={props.dispatch}
                                                              newMessageText={props.appState.MessagePage.newMessageText}
                                                              newMessage={props.appState.MessagePage.newMessage}/>}/>
            </Routes>
        </div>
    );
}

export default App;
