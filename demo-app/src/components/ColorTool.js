export function ColorTool() {

    // primitives
    // - string*
    // - number*
    // - boolean*
    // - symbol
    // - bigint
    // - undefined*
    // - null*

    // object
    // everything else is an object - Object Literal, Arrays, Functions, Date, Maps, Sets, Promises, etc...

    const colors = [
        { id: 1, name: 'red', hexcode: 'ff0000' },
        { id: 2, name: 'green', hexcode: '00ff00' },
        { id: 3, name: 'blue', hexcode: '0000ff' },
    ];

    return (
        <>
            <header>
                <h3>Color Tool</h3>
            </header>
            <ul>
                {/*
                    - purpose of the key is connect model data (color) to the element (li)
                    - why? to optimize re-rendering ** explain later **
                    - the key should be number or string that is unique within the set of model data
                    - the key is applied to dynamically generated siblings
                */}
                {colors.map(color => <li key={color.id}>{color.name}</li>)}
            </ul>
        </>
    );

}