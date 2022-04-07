import { bindActionCreators } from "redux";
import { useDispatch, useSelector } from "react-redux";
import { useEffect, useMemo } from "react";

import {
    appendCar, createReplaceAction, createRemoveAction,
    createEditAction, createCancelAction, refreshCars,
} from "../actions/carToolActions";
import { carsSelector, editCarIdSelector } from '../selectors/carToolSelectors';

export const useCarToolReduxStore = () => {

    const cars = useSelector(carsSelector);
    const editCarId = useSelector(editCarIdSelector);

    const dispatch = useDispatch();

    const boundActions = useMemo(() => bindActionCreators({
        refreshCars,
        addCar: appendCar,
        saveCar: createReplaceAction,
        deleteCar: createRemoveAction,
        editCar: createEditAction,
        cancelCar: createCancelAction,
    }, dispatch), [dispatch]);

    useEffect(() => {
        boundActions.refreshCars();
    }, [boundActions]);

    return {
        ...boundActions,
        cars,
        editCarId,
    };

};