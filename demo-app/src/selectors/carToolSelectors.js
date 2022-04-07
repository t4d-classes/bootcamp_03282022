


export const carsSelector = state => {
    return state.cars.map(car => {
        const carCopy = { ...car };
        carCopy.formattedPrice = '$' + car.price;
        return carCopy;
    });
};

export const editCarIdSelector = state => state.editCarId;