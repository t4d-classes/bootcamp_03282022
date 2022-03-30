import { useState } from 'react';

export const CarForm = (props) => {

    const [ carForm, setCarForm ] = useState({
        make: '', model: '', year: 1900, color: '', price: 0
    });

    const change = (e) => {
        setCarForm({
            ...carForm, // copy the properties from car form
            
            // computed property
            [e.target.name]: e.target.type === 'number'
                ? e.target.valueAsNumber : e.target.value,
        });
    };

    console.log(carForm);

    return (
        <form>
            <label>
                Make:
                <input type="text" name="make"
                    value={carForm.make} onChange={change} />
            </label>
            <label>
                Model:
                <input type="text" name="model"
                    value={carForm.model} onChange={change} />
            </label>
            <label>
                Year:
                <input type="number" name="year"
                    value={carForm.year} onChange={change} />
            </label>
            <label>
                Color:
                <input type="text" name="color"
                    value={carForm.color} onChange={change} />
            </label>
            <label>
                Price:
                <input type="number" name="price"
                    value={carForm.price} onChange={change} />
            </label>
            <button type="button"></button>
        </form>
    );

};