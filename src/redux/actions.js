import { getUsers, fillGenders, setUser } from '../api/users';
import { addTask, fillTaskStatusses } from '../api/tasks';

export const setLoggedAC = (login ,id) => {
    return { type: 'SET_LOGGED', payload: { login, id } }
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

export const addTaskAC = task => {
    return { type: 'ADD_TASK', payload: task }
}

export const fillTaskStatussesAC = value => {
    return { type: 'FILL_TASK_STATUSSES', payload: value }
}


export const addTaskThunk = (task, clearFieldCB) => {
    return async dispatch => {
        const result = await addTask({
            title: task.title,
            text: task.text,
            status: task.status,
            executorId: task.executorId,
            userId: task.userId,
        });
        const todoWithId = await result.json();
        if(todoWithId) {
            // dispatch(addTaskAC(todoWithId));
            clearFieldCB();
        }
    }
}

export const fillTaskStatussesThunk = () => {
    return async dispatch => {
        const taskStatusses = await fillTaskStatusses || [];
        dispatch(fillTaskStatussesAC(taskStatusses));
    }
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
                dispatch(setLoggedAC(login, user.id));
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