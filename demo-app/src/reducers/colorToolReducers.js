import { combineReducers } from "redux";

import {
    APPEND_ACTION, REMOVE_ACTION,
    SORT_ACTION, TOGGLE_HEXCODE_ACTION
} from "../actions/colorToolActions";

const colorList = [
    { id: 1, name: 'red', hexcode: 'ff0000' },
    { id: 2, name: 'green', hexcode: '00ff00' },
    { id: 3, name: 'blue', hexcode: '0000ff' },
];

const colorsReducer = (colors = colorList, action) => {

    switch (action.type) {
        case APPEND_ACTION:
            return [
                ...colors,
                {
                    ...action.color,
                    id: Math.max(...colors.map(c => c.id), 0) + 1,
                }
            ];
        case REMOVE_ACTION:
            return colors.filter(c => c.id !== action.colorId);
        default:
            return colors;
    }

};

const sortDirReducer = (sortDir = 'asc', action) => {

    if (action.type === SORT_ACTION) {
        return action.sortDir;
    }

    return sortDir;

};

const showHexcodeReducer = (showHexcode = false, action) => {

    if (action.type === TOGGLE_HEXCODE_ACTION) {
        return !showHexcode;
    }

    return showHexcode;

};


export const colorToolReducer = combineReducers({
    colors: colorsReducer,
    sortDir: sortDirReducer,
    showHexcode: showHexcodeReducer,
});