import { combineReducers } from "redux";

import {
    ADD_ACTION, SUBTRACT_ACTION,
    MULTIPLY_ACTION, DIVIDE_ACTION,
    CLEAR_ACTION, DELETE_HISTORY_ENTRY_ACTION
} from "../actions/calcToolActions";


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

// combine reducers produces this...
// export const calcToolReducer = (state, action) => {
//     return {
//         ...state,
//         result: resultReducer(state.result, action),
//     };
// };

export const calcToolReducer = combineReducers({
    history: historyReducer,
});