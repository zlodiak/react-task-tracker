import { getGenders } from '../api/users';

const optionsReducer = function optionsReducer(state = [], action) {
    switch(action.type) {
        case 'FILL_GENDERS': {
            state = {
                ...state,
                genders: action.payload,
            };
            break;
        }              
        default:
            return state;
    }
    return state;
}



export default optionsReducer;