import { createStore, combineReducers } from 'redux';
import mainReducer from './mainReducer';

const store = createStore(combineReducers({
    mainReducer,
}));

export default store;

store.subscribe(v => {
    // console.log(store.getState())
});

window.state = store.getState