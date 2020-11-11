import { createStore, combineReducers, applyMiddleware } from 'redux';
import authReducer from './authReducer';
import optionsReducer from './optionsReducer';
import thunkMiddleware from 'redux-thunk';

const store = createStore(combineReducers({
    authReducer,
    optionsReducer,
}), applyMiddleware(thunkMiddleware));

export default store;

store.subscribe(v => {
    // console.log(store.getState())
});

window.state = store.getState