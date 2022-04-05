

export const APPEND_ACTION = '[CarTool] Append Car';
export const REPLACE_ACTION = '[CarTool] Replace Car';
export const REMOVE_ACTION = '[CarTool] Remove Car';
export const EDIT_ACTION = '[CarTool] Edit Car';
export const CANCEL_ACTION = '[CarTool] Cancel Car';

export const createAppendAction = (car) =>
    ({ type: APPEND_ACTION, car });
export const createReplaceAction = (car) =>
    ({ type: REPLACE_ACTION, car });
export const createRemoveAction = (carId) =>
    ({ type: REMOVE_ACTION, carId });
export const createEditAction = (carId) =>
    ({ type: EDIT_ACTION, carId });
export const createCancelAction = () =>
    ({ type: CANCEL_ACTION });