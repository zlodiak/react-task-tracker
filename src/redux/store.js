import { createStore, combineReducers } from 'redux';
import authReducer from './authReducer';

const store = createStore(combineReducers({
    authReducer,
}));

export default store;

store.subscribe(v => {
    // console.log(store.getState())
});

window.state = store.getState