import { useState } from 'react';

export const ColorForm = (props) => {

    const formState = useState({
        name: '',
        hexcode: ''
    } /* this object is used for initialization on the first render only */)

    const colorForm = formState[0]; // current state data
    const setColorForm = formState[1]; // function to update state and re-render


    const change = (e) => {

        // target => input field
        const inputType = e.target.type;
        const inputName = e.target.name;
        const inputValue = inputType === "number" ? e.target.valueAsNumber : e.target.value;

        const newColorForm = {
            name: colorForm.name,
            hexcode: colorForm.hexcode,
        };

        newColorForm[inputName] = inputValue;


        setColorForm(newColorForm); // update the state and re-render
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