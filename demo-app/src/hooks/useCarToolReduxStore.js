import { bindActionCreators } from "redux";
import { useDispatch, useSelector } from "react-redux";

import {
    createAppendAction, createReplaceAction, createRemoveAction,
    createEditAction, createCancelAction,
} from "../actions/carToolActions";

export const useCarToolReduxStore = () => {

    const cars = useSelector(state => {
        return state.cars.map(car => {

            const carCopy = { ...car };
            carCopy.formattedPrice = '$' + car.price;
            return carCopy;
        });
    });
    const editCarId = useSelector(state => state.editCarId);

    const dispatch = useDispatch();

    const boundActions = bindActionCreators({
        addCar: createAppendAction,
        saveCar: createReplaceAction,
        deleteCar: createRemoveAction,
        editCar: createEditAction,
        cancelCar: createCancelAction,
    }, dispatch);


    return {
        ...boundActions,
        cars,
        editCarId,
    };

};