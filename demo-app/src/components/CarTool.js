import React from "react"

export function CarTool(props) {

    props.cars.push({ id: 3, make: 'Chevrolet', model: 'Fusion Hybrid', year: 2020, color: 'red', price: 45000 });    

    return (
        <>
            <header>
                <h3>Car Tool</h3>
            </header>
            <table>
                <thead>
                    <tr>
                        <th>Id</th>
                        <th>Make</th>
                        <th>Model</th>
                        <th>Year</th>
                        <th>Color</th>
                        <th>Price</th>
                    </tr>
                </thead>
                <tbody>
                    {props.cars.map(car => <tr key={car.id}>
                        <td>{car.id}</td>
                        <td>{car.make}</td>
                        <td>{car.model}</td>
                        <td>{car.year}</td>
                        <td>{car.color}</td>
                        <td>{car.price}</td>
                    </tr>)}
                </tbody>
            </table>
        </>
    );

}