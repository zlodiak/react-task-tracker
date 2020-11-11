import { getUsers, fillGenders, setGender, setUser } from '../api/users';

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
                dispatch(setGenderAC(user.gender));
            }
        });
    }
}

export const setGenderThunk = (gender, login) => {
    return async dispatch => {
      const users = await getUsers || [];
      for(let user of users) {
        if(user.login === login) {
          const user_ = { ...user, gender: gender };
          const result = await setUser(user_, user.id);
          if(result.ok) {
            dispatch(setGenderAC(user_.gender));
          }
        }
      };
    }
  }