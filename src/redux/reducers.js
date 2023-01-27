const initialState = {
    tasks: [],
    filter: 'all'
};

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case 'ADD_TASK':
            return {
                ...state,
                tasks: [...state.tasks, action.task]
            };
        case 'EDIT_TASK':
            return {
                ...state,
                tasks: state.tasks.map(task => {
                    if (task.id === action.id) {
                        return { ...task, ...action.updates };
                    }
                    return task;
                })
            };
        case 'FILTER_TASKS':
            return {
                ...state,
                filter: action.filter
            };
        case 'DELETE_TASK':
                return {
                    ...state,
                    tasks: state.tasks.filter(task => task.id !== action.id)
            };
        default:
            return state;
    }
};

export default reducer;
