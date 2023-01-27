import React from 'react'
import { useSelector } from 'react-redux';
import Task from './Task';

export default function ListTask() {
  
    const tasks = useSelector(state => state.tasks);
    const filter = useSelector(state => state.filter);
    return (
        <div>
            {tasks.filter(task => filter === 'all' || task.isDone === (filter === 'done')).map(task => (
                <Task key={task.id} task={task} />
            ))}
        </div>
    );
}
