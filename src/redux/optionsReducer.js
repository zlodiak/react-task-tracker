import { getGenders } from '../api/users';

const optionReducer = function optionReducer(state = [], action) {
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



export default optionReducer;