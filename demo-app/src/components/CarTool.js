import React from "react"

export function CarTool() {

    return (
        <>
            <h3>Car Tool</h3>
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
                    <tr>
                        <td>1</td>
                        <td>Bugatti</td>
                        <td>Chiron Supersport</td>
                        <td>2022</td>
                        <td>blue</td>
                        <td>3825000</td>
                    </tr>
                </tbody>
            </table>
        </>
    );

    // return (
    //     React.createElement(React.Fragment, null,
    //       React.createElement('h3', { children: 'Car Tool' }),
    //       React.createElement('table'))
    // );


}