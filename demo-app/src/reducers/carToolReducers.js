import { combineReducers } from "redux";

import {
    APPEND_ACTION, REMOVE_ACTION, REPLACE_ACTION,
    EDIT_ACTION, CANCEL_ACTION,
} from "../actions/carToolActions";

const carList = [
    { id: 1, make: 'Bugati', model: 'Chiron Supersport', year: 2022, color: 'blue', price: 3825000 },
    { id: 2, make: 'Ford', model: 'Fusion Hybrid', year: 2020, color: 'red', price: 45000 },
];

const carsReducer = (cars = carList, action) => {

    switch (action.type) {
        case APPEND_ACTION:
            return [
                ...cars,
                {
                    ...action.car,
                    id: Math.max(...cars.map(c => c.id), 0) + 1,
                }
            ];
        case REPLACE_ACTION:
            const newCars = [...cars];
            const carIndex = newCars.findIndex(c => c.id === action.car.id);
            newCars[carIndex] = action.car;
            return newCars;           
        case REMOVE_ACTION:
            return cars.filter(c => c.id !== action.carId);
        default:
            return cars;
    }
};

const editCarIdReducer = (editCarId = -1, action) => {

    if (action.type === EDIT_ACTION) {
        return action.carId;
    }

    if ([ APPEND_ACTION, REMOVE_ACTION,
          REPLACE_ACTION, CANCEL_ACTION].includes(action.type)) {
        return -1;
    }

    return editCarId;
};

export const carToolReducer = combineReducers({
    cars: carsReducer,
    editCarId: editCarIdReducer,
});