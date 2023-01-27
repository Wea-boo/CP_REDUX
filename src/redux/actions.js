export const addTask = task => ({
    type: 'ADD_TASK',
    task
});

export const editTask = (id, updates) => ({
    type: 'EDIT_TASK',
    id,
    updates
});

export const filterTasks = filter => ({
    type: 'FILTER_TASKS',
    filter
});

export const deleteTask = (id)  => ({
    type: 'DELETE_TASK',
    id
});