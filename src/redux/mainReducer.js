
const mainReducer = function mainReducer(state = { clicks: 0 }, action) {
    switch(action.type) {
        case 'ADD_CLICK': {
            state = {
                ...state,
                clicks: action.payload,
            };
            break;
        }
        default:
            return state;
    }
    return state;
}

export const addClickCreator = main => {
    return { type: 'ADD_CLICK', payload: main }
}

export default mainReducer;