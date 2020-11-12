import { getTasks } from '../api/tasks';

const tasksReducer = function optionsReducer(state = [], action) {
    switch(action.type) {
        case 'ADD_TASK': {
            state = {
                ...state,
                tasks: [ ...state.tasks, action.payload ],
            };
            break;
        }              
        default:
            return state;
    }
    return state;
}

export default tasksReducer;