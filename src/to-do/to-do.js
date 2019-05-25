import React, { useState } from 'react';
import Form from './form'

function ToDoApp() {
    const [tasks, setTasks] = useState([]);

    const save = (task) => {
        tasks.push(task);
        setTasks(tasks);
    }

    return (
        <div className="jumbotron mt-5">
            <Form save={save}/>
            <br />

            <ul>
                {tasks.map((task) => <li>{task}</li>)}
            </ul>
        </div>
    );
}

export default ToDoApp;