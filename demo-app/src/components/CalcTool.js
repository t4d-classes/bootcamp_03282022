import { useState } from 'react';

import { useCalcToolReduxStore } from '../hooks/useCalcToolReduxStore';

export const CalcTool = () => {

    const {
        result, history,
        add, subtract,
        multiply, divide,
        clear,
    } = useCalcToolReduxStore();

    const [ numInput, setNumInput ] = useState(0);

    const doClear = () => {
        setNumInput(0);
        clear();
    };

    return (
        <>
            <div>Result: {result}</div>
            <form>
                <label>
                    Num Input:
                    <input type="number" value={numInput}
                        onChange={e => setNumInput(e.target.valueAsNumber)} />
                </label>
                <fieldset>
                    <button type="button" onClick={() => add(numInput)}>+</button>
                    <button type="button" onClick={() => subtract(numInput)}>-</button>
                    <button type="button" onClick={() => multiply(numInput)}>*</button>
                    <button type="button" onClick={() => divide(numInput)}>/</button>
                    <button type="button" onClick={doClear}>Clear</button>
                </fieldset>
            </form>
            <ul>
                {history.map(entry => <li key={entry.id}>
                    {entry.opName} {entry.opValue}
                </li>)}
            </ul>
        </>
    )


}

