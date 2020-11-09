import { createStore, combineReducers, applyMiddleware } from 'redux';
import authReducer from './authReducer';
import thunkMiddleware from 'redux-thunk';

const store = createStore(combineReducers({
    authReducer,
}), applyMiddleware(thunkMiddleware));

export default store;

store.subscribe(v => {
    // console.log(store.getState())
});

window.state = store.getState