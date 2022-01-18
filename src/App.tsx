import React from 'react';
import './App.css';
import {Todolist} from './components/Todolist';

function App() {

    const tasks1 = [
        {id:1, title: 'HTML&Css', isDone: true},
        {id:2, title: 'JavaScript', isDone: true},
        {id:3, title: 'React', isDone: false},
    ]

    const tasks2 = [
        {id:1, title: 'Milk', isDone: true},
        {id:2, title: 'Bread', isDone: false},
        {id:3, title: 'Water', isDone: false},
    ]

    return (
        <div className="App">
            <Todolist title="What to learn?" tasks={tasks1}/>
            <Todolist title="What to buy?" tasks={tasks2}/>
        </div>
    );
}

export default App;
