
export const ADD_ACTION = '[CalcTool] Add';
export const SUBTRACT_ACTION = '[CalcTool] Subtract';
export const MULTIPLY_ACTION = '[CalcTool] Multiply';
export const DIVIDE_ACTION = '[CalcTool] Divide';
export const CLEAR_ACTION = '[CalcTool] Clear';
export const DELETE_HISTORY_ENTRY_ACTION = '[CalcTool] Delete History Entry';
export const SET_ERROR_MESSAGE_ACTION = '[CalcTool] Set Error Message';

export const createAddAction = (value) =>
    ({ type: ADD_ACTION, value });
export const createSubtractAction = (value) =>
    ({ type: SUBTRACT_ACTION, value });
export const createMultiplyAction = (value) =>
    ({ type: MULTIPLY_ACTION, value });

export const createDivideAction = (value) => {

    if (value === 0) {
        return { type: SET_ERROR_MESSAGE_ACTION, message: 'Cannot divide by zero.' };
    } else {
        return { type: DIVIDE_ACTION, value };
    }

};

export const createClearAction = () =>
    ({ type: CLEAR_ACTION });
export const createDeleteHistoryEntryAction = (entryId) =>
    ({ type: DELETE_HISTORY_ENTRY_ACTION, entryId });        