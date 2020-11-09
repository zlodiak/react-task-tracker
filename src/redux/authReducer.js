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
        default:
            return state;
    }
    return state;
}

export const setLoggedAC = value => {
    return { type: 'SET_LOGGED', payload: value }
}

export const setDisplayModeAC = value => {
    return { type: 'SET_DISPLAY_MODE', payload: value }
}


export default authReducer;