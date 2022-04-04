import { combineReducers } from "redux";

import { ADD_ACTION, SUBTRACT_ACTION, MULTIPLY_ACTION, DIVIDE_ACTION } from "../actions/calcToolActions";


const resultReducer = (result = 0, action) => {

    switch(action.type) {
        case ADD_ACTION:
            return result + action.value;
        case SUBTRACT_ACTION:
            return result - action.value;
        case MULTIPLY_ACTION:
            return result * action.value;
        case DIVIDE_ACTION:
            return result / action.value;
        default:
            return result;
    }
};

const historyReducer = (history = [], action) => {

    if ([
        ADD_ACTION, SUBTRACT_ACTION,
        MULTIPLY_ACTION, DIVIDE_ACTION,
    ].includes(action.type)) {
        return [
            ...history,
            {
                id: Math.max(...history.map(entry => entry.id), 0) + 1,
                opName: action.type,
                opValue: action.value,
            },
        ];
    }

    return history;

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
    history: historyReducer,
});