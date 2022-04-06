export const allCars = async () => {
    try {
        const res = await fetch('http://localhost:3060/cars'); // GET
        const cars = await res.json();
        return cars;
    } catch(err) {
        // handle the error
    }
};

export const oneCar = async (carId) => {
    try {
        const res = await fetch(`http://localhost:3060/cars/${encodeURIComponent(carId)}`); // GET
        const car = await res.json();
        return car;
    } catch(err) {
        // handle the error
    }
};        

export const appendCar = async (newCar) => {
    try {
        const res = await fetch(`http://localhost:3060/cars`, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(newCar),
        });
        const car = await res.json();
        return car;
    } catch(err) {
        // handle the error
    }
}; 

export const replaceCar = async (car) => {
    try {
        await fetch(`http://localhost:3060/cars/${encodeURIComponent(car.id)}`, {
            method: 'PUT',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(car),
        });
    } catch(err) {
        // handle the error
    }
}; 

export const removeCar = async (carId) => {
    try {
        await fetch(`http://localhost:3060/cars/${encodeURIComponent(carId)}`, {
            method: 'DELETE',
        });
    } catch(err) {
        // handle the error
    }
}; 
