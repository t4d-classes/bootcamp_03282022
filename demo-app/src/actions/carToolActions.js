import { createApi } from '../services/apiData';

const carsApi = createApi('cars');

export const REFRESH_REQUEST_ACTION = '[CarTool] Refresh Cars Request';
export const REFRESH_DONE_ACTION = '[CarTool] Refresh Cars Done';

export const APPEND_ACTION = '[CarTool] Append Car';
export const REPLACE_ACTION = '[CarTool] Replace Car';
export const REMOVE_ACTION = '[CarTool] Remove Car';
export const EDIT_ACTION = '[CarTool] Edit Car';
export const CANCEL_ACTION = '[CarTool] Cancel Car';

export const createRefreshRequestAction = () =>
    ({ type: REFRESH_REQUEST_ACTION });

export const createRefreshDoneAction = (cars) =>
    ({ type: REFRESH_DONE_ACTION, cars });

export const refreshCars = () => {

    // this is the function dispatched into the pipeline
    // when the thunk middleware invokes this function is passes
    // a reference to the dispatch function
    return async dispatch => {

        // request action - first task
        dispatch(createRefreshRequestAction());

        const cars = await carsApi.all();

        // done action - second task
        dispatch(createRefreshDoneAction(cars));

    };

};



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