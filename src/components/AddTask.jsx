import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addTask } from '../redux/actions';

export default function AddTask() {



    const dispatch = useDispatch();
    const tasks = useSelector(state => state.tasks);

    const handleSubmit = e => {
        e.preventDefault();
        const newTask = e.target.task.value;
        console.log(newTask);
        dispatch(addTask({'id': tasks.length+1, 'description': newTask, 'isDone': false}));
    };


    return (
        <form onSubmit={handleSubmit}>
            <input type="text" name='task' placeholder="Add task" />
            <button type="submit">Add</button>
        </form>
    );
}
