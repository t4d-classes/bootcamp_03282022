
export const ADD_ACTION = '[CalcTool] Add';
export const SUBTRACT_ACTION = '[CalcTool] Subtract';

export const createAddAction = (value) =>
    ({ type: ADD_ACTION, value });
export const createSubtractAction = (value) =>
    ({ type: SUBTRACT_ACTION, value });