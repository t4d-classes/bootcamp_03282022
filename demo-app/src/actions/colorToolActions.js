

export const APPEND_ACTION = '[ColorTool] Append Color';
export const REMOVE_ACTION = '[ColorTool] Remove Color';
export const SORT_ACTION = '[ColorTool] Sort Colors';
export const TOGGLE_HEXCODE_ACTION = '[ColorTool] Toogle Hexcode';

export const createAppendAction = (color) =>
    ({ type: APPEND_ACTION, color });
export const createRemoveAction = (colorId) =>
    ({ type: REMOVE_ACTION, colorId });
export const createSortAction = (sortDir) =>
    ({ type: SORT_ACTION, sortDir });
export const createToggleHexcodeAction = () =>
    ({ type: TOGGLE_HEXCODE_ACTION });
