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
                    <tr>
                        <td>2</td>
                        <td>Ford</td>
                        <td>Fusion Hybrid</td>
                        <td>2021</td>
                        <td>red</td>
                        <td>45000</td>
                    </tr>
                </tbody>
            </table>
        </>
    );

    // return (
    //     <h3></h3>
    //     <table></table>
    // )
    
    // return (
    //    React.createElement('h3', { children: 'Car Tool' })
    //    React.createElement('table'))
    // );    

}