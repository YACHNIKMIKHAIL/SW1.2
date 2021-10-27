import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';

let posts = [
    {id: 1, message: "Hi, how I am?", LikeCounts: 7},
    {id: 2, message: "It's my props", LikeCounts: 47},
    {id: 3, message: "I want go home", LikeCounts: 0},
    {id: 4, message: "I want go home", LikeCounts: 0},

]

let dialogs = [
    {id: 1, name: "Ritka"},
    {id: 2, name: "Egor"},
    {id: 3, name: "Mama"}
]

let messages = [
    {id: 1, message: "-Что?"},
    {id: 2, message: "-Где?"},
    {id: 3, message: "-Когда?"},
    {id: 3, message: "Чё???"},
]

ReactDOM.render(
    <React.StrictMode>
        <App  posts={posts} dialogs={dialogs} messages={messages}/>
    </React.StrictMode>,
    document.getElementById('root')
);


// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals();


