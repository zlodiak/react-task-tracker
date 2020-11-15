import { setGenderAC } from './actions';
import authReducer from './authReducer';

let state = {
    displayMode: 'login',
    gender: '1',
    idLogged: 1,
    isLogged: '111',
};

test('gender will be changed', () => {
    const action = setGenderAC('2');
    const newState = authReducer(state, action);
    expect(newState.gender).toBe('2');
});