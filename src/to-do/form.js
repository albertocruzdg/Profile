import React, { useState } from 'react';

const Form = (props) => {
    const [task, setTask] = useState('');

    const handleSubmit = (event) => {
        props.save(task);
        setTask('');

        event.preventDefault();
    };

    return (
        <form onSubmit={handleSubmit}>
            <div className="form-group">
                <label for="task">Task:</label>
                <input id="task" value={task} onChange={event => setTask(event.target.value)} className="form-control"/>
            </div>
            
            <input className="btn btn-primary" type="submit" />
        </form>
    );
};

export default Form;