import React from 'react';
import './App.css';
import Header from "./components/Header/Header";
import {BrowserRouter, Route} from "react-router-dom";
import NavBar from "./components/NavBar/NavBar";
import Profile from "./components/Profile/Profile";
import Dialogs from "./components/Dialogs/Dialogs";
import Music from "./components/Music/Music";
import News from "./components/News/News";
import Settings from "./components/Settings/Settings";


const App = (props: {
    messages: any;
    dialogs: any;
    posts:any[] },) => {
    

    return (
        <BrowserRouter>
            <div className='app-wrapper'>
                <Header/>
                <NavBar/>
                <Route path='/profile' render={() => <Profile posts={props.posts}/>}/>
                <Route path='/dialogs' render={() => <Dialogs dialogs={props.dialogs} messages={props.messages}/>}/>
                <Route path='/music' component={Music}/>
                <Route path='/News' component={News}/>
                <Route path='/Settings' component={Settings}/>
            </div>
        </BrowserRouter>
    );
}


export default App;

