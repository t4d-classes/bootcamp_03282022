import { useState } from 'react';

export const ColorForm = (props) => {

    const [ colorForm, setColorForm ] = useState({
        name: '',
        hexcode: ''
    });

    const change = (e) => {
        setColorForm({
            ...colorForm, // copy the properties from color form
            
            // computed property
            [e.target.name]: e.target.type === 'number'
                ? e.target.valueAsNumber : e.target.value,
        });
    };

    console.log(colorForm);

    return (
        <form>
            <label>
                Name:
                <input type="text" name="name"
                    value={colorForm.name} onChange={change} />
            </label>
            <label>
                Hexcode:
                <input type="text" name="hexcode"
                    value={colorForm.hexcode} onChange={change} />
            </label>
            <button type="button"></button>
        </form>
    );

};