import { getTasks } from '../api/tasks';

const stateInit = {
    taskStatusses: [],
    tasks: [],
};

const tasksReducer = function tasksReducer(state = stateInit, action) {
    console.log(state)
    switch(action.type) {
        case 'ADD_TASK': {
            state = {
                ...state,
                tasks: [ ...state.tasks, action.payload ],
            };
            break;
        }  
        case 'FILL_TASK_STATUSSES': {
            state = {
                ...state,
                taskStatusses: action.payload,
            };
            break;
        }             
        default:
            return state;
    }
    return state;
}

export default tasksReducer;