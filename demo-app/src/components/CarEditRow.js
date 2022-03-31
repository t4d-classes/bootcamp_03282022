import PropTypes from 'prop-types';
import { useState } from 'react';

import { carPropType } from '../propTypes/cars';

export const CarEditRow = (props) => {

    const [ carForm, setCarForm ] = useState({
        make: props.car.make,
        model: props.car.model,
        year: props.car.year,
        color: props.car.color,
        price: props.car.price,
    });

    const change = (e) => {
        setCarForm({
            ...carForm, // copy the properties from car form
            
            // computed property
            [e.target.name]: e.target.type === 'number'
                ? e.target.valueAsNumber : e.target.value,
        });
    };

    return (
        <tr>
            <td>{props.car.id}</td>
            <td><input type="text" name="make"
                    value={carForm.make} onChange={change} /></td>
            <td><input type="text" name="model"
                    value={carForm.model} onChange={change} /></td>
            <td><input type="number" name="year"
                    value={carForm.year} onChange={change} /></td>
            <td><input type="text" name="color"
                    value={carForm.color} onChange={change} /></td>
            <td><input type="number" name="price"
                    value={carForm.price} onChange={change} /></td>
            <td>
                <button type="button">Save</button>
                <button type="button">Cancel</button>
            </td>
        </tr>        
    );
};

CarEditRow.propTypes = {
    car: carPropType.isRequired,
    onSaveCar: PropTypes.func.isRequired,
    onCancelCar: PropTypes.func.isRequired,
};