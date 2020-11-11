const authReducerInit = {
    isLogged: false,
    displayMode: 'login',
};

const authReducer = function authReducer(state = authReducerInit, action) {
    switch(action.type) {
        case 'SET_LOGGED': {
            state = {
                ...state,
                isLogged: action.payload,
            };
            break;
        }
        case 'SET_DISPLAY_MODE': {
            state = {
                ...state,
                displayMode: action.payload,
            };
            break;
        }   
        case 'SET_GENDER': {
            state = {
                ...state,
                gender: action.payload,
            };
            break;
        }               
        default:
            return state;
    }
    return state;
}

export default authReducer;