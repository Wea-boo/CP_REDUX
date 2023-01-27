import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { deleteTask, editTask } from '../redux/actions';

export default function Task(props) {
    const { task } = props;
    const [isEdit,SetisEdit] = useState(false);
    const dispatch = useDispatch();
    const handleDelete = () => {
        dispatch(deleteTask(task.id));
    };

    const handleSave = (e) => {
        e.preventDefault();
        const ChangedTask = e.target.edit.value;
        dispatch(editTask(task.id, {description: ChangedTask}));
        SetisEdit(false);
    };
    return ( <div> { !isEdit ? 
        <div style={ task.isDone ? {backgroundColor: 'grey'} : {backgroundColor: 'white'}}>
            <input type="checkbox" checked={task.isDone} onChange={() => dispatch(editTask(task.id, { isDone: !task.isDone }))} />
            <span>{task.description}</span>
            <button onClick={handleDelete}>Delete</button>
            <button onClick={() => SetisEdit(true)}>Edit</button>
        </div>
        : <form onSubmit={handleSave}>
            <input type="text" name='edit'/>
            <button action="submit">Save</button>
        </form>
    }
    </div>
    );
}
