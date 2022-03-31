import './App.css';
import './normalize.css'
import './fonts.css'
import {Routes, Route} from 'react-router-dom';
import {StartPage} from "./components/StartPage/StartPage";
import {HomePage} from "./components/HomePage/HomePage";

function App(props) {
    return (
        <div className="App">
            <Routes>
                <Route path='/social-app' element={<StartPage/>}/>
                <Route path='home' element={<HomePage postState={props.appState.HomePage.Posts}/>}/>
            </Routes>
        </div>
    );
}

export default App;
