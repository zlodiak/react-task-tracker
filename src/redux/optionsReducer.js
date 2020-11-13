const optionsReducer = function optionsReducer(state = { usersLogins: [] }, action) {
    switch(action.type) {
        case 'FILL_GENDERS': {
            state = {
                ...state,
                genders: action.payload,
            };
            break;
        }    
        case 'FILL_USERS': {
            state = {
                ...state,
                usersLogins: action.payload,
            };
            break;
        }           
        default:
            return state;
    }
    return state;
}



export default optionsReducer;