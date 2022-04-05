import { combineReducers } from "redux";

import {
    ADD_ACTION, SUBTRACT_ACTION,
    MULTIPLY_ACTION, DIVIDE_ACTION,
    CLEAR_ACTION, DELETE_HISTORY_ENTRY_ACTION,
    SET_ERROR_MESSAGE_ACTION
} from "../actions/calcToolActions";

// reducers can call other reducers
// there is only one top-level reducer

// rules of a reducer function
// - reducers are pure functions

// what's a pure function?
// 1. all data must be passed in via the parameters
// 2. parameters cannot be mutated
// 3. no side effects
// 4. the only output is the return value


const historyReducer = (history = [], action) => {

    if (action.type === CLEAR_ACTION) {
        return [];
    }

    if (action.type === DELETE_HISTORY_ENTRY_ACTION)
    {
        return history.filter(entry => entry.id !== action.entryId);
    }

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

const errorMessageReducer = (errorMessage = '', action) => {

    if (action.type === SET_ERROR_MESSAGE_ACTION) {
        return action.message;
    }

    if (action.type === DELETE_HISTORY_ENTRY_ACTION) {
        return errorMessage;
    }

    return '';
};

// combine reducers produces this...
// export const calcToolReducer = (state, action) => {
//     return {
//         ...state,
//         result: resultReducer(state.result, action),
//     };
// };

export const calcToolReducer = combineReducers({
    history: historyReducer,
    errorMessage: errorMessageReducer,
});