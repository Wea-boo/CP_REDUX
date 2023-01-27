import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { filterTasks } from '../redux/actions';
import Task from './Task';


export default function ListTask() {
  
    const tasks = useSelector(state => state.tasks);
    const filter = useSelector(state => state.filter);
    const dispatch = useDispatch();
    const [isFiltered, setisFiltered] = useState(false);

    const handleFilter = () => {
        setisFiltered(state => !state);
    }

    useEffect(() => {
        if(isFiltered){
            dispatch(filterTasks('done'));
        }else dispatch(filterTasks('all'));
    }, [isFiltered]);
    return (
        <div>
            <p>Filter Tasks By: <button onClick={handleFilter}>{filter}</button> </p>
            {tasks.filter(task => filter === 'all' || task.isDone === (filter === 'done')).map(task => (
                <Task key={task.id} task={task} />
            ))}
        </div>
    );
}
