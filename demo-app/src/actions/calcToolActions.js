
export const ADD_ACTION = '[CalcTool] Add';
export const SUBTRACT_ACTION = '[CalcTool] Subtract';
export const MULTIPLY_ACTION = '[CalcTool] Multiply';
export const DIVIDE_ACTION = '[CalcTool] Divide';

export const createAddAction = (value) =>
    ({ type: ADD_ACTION, value });
export const createSubtractAction = (value) =>
    ({ type: SUBTRACT_ACTION, value });
export const createMultiplyAction = (value) =>
    ({ type: MULTIPLY_ACTION, value });
export const createDivideAction = (value) =>
    ({ type: DIVIDE_ACTION, value });