import { getUsers, fillGenders } from '../api/users';

export const setLoggedAC = value => {
    return { type: 'SET_LOGGED', payload: value }
}

export const setDisplayModeAC = value => {
    return { type: 'SET_DISPLAY_MODE', payload: value }
}

export const setGenderAC = value => {
    return { type: 'SET_GENDER', payload: value }
}

export const fillGendersAC = value => {
    return { type: 'FILL_GENDERS', payload: value }
}

export const fillGendersThunk = () => {
    return async dispatch => {
        const genders = await fillGenders || [];
        dispatch(fillGendersAC(genders));
    }
}

export const tryLoginThunk = (login, password) => {
    return async dispatch => {
        const users = await getUsers || [];
        users.forEach(user => {
            if(user.login === login && user.password === password) {
                dispatch(setLoggedAC(login));
            }
        });
    }
}

// export const setGenderThunk = (login) => {
//     return async dispatch => {
//         const users = await getGender;
//         users.forEach(user => {
//             if(user.login === login) {
//                 dispatch(setGenderAC(user.gender));
//             }
//         });
//     }
// }
