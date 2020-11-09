import { getUsers } from '../api/users';

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

export const tryLoginThunk = (login, password) => {
    return async dispatch => {
        const result = await getUsers || [];
        result.forEach(user => {
            if(user.login === login && user.password === password) {
                dispatch(setLoggedAC(login));
            }
        });
    }
}


export default authReducer;