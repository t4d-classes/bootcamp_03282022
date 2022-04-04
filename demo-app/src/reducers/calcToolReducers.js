import { combineReducers } from "redux";

import { ADD_ACTION, SUBTRACT_ACTION } from "../actions/calcToolActions";


const resultReducer = (result = 0, action) => {

    switch(action.type) {
        case ADD_ACTION:
            return result + action.value;
        case SUBTRACT_ACTION:
            return result - action.value;
        default:
            return result;
    }
};

// combine reducers produces this...
// export const calcToolReducer = (state, action) => {
//     return {
//         ...state,
//         result: resultReducer(state.result, action),
//     };
// };

export const calcToolReducer = combineReducers({
    result: resultReducer,
});