import './App.css';
import './normalize.css'
import './fonts.css'
// import {StartPage} from "./components/StartPage/StartPage";
import {HomePage} from "./components/HomePage/HomePage";

function App(props) {
    return (
        <div className="App">
            {/*<StartPage/>*/}
            <HomePage postState={props.appState.HomePage.Posts}/>
        </div>
    );
}

export default App;
