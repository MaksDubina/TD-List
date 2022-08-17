import React from 'react';
import './App.css';
import TodoList, {TaskType} from "./Components/TodoList";


function App() {
    // BLL:
    const todoListTitle_1: string = 'What to Learn today';
    const todoListTitle_2: string = 'What to buy Learn week';
    const tasks_1: Array<TaskType> = [
        {id: 1, title: 'HTML&CSS', isDone: true},
        {id: 2, title: "JS&TS", isDone: true},
        {id: 3, title: "React", isDone: false},
    ];
    const tasks_2: Array<TaskType> = [
        {id: 4, title: 'map', isDone: false},
        {id: 5, title: "filter", isDone: false} ,
        {id: 6, title: "reducer", isDone: false},
        {id: 7, title: "reducer", isDone: false},
        {id: 8, title: "reducer", isDone: false},
    ];


    //UI:
    return (
        <div className="App">
            <TodoList title={todoListTitle_1} tasks={tasks_1}/>
            <TodoList title={todoListTitle_2} tasks={tasks_2}/>
        </div>
    );
}

export default App;
