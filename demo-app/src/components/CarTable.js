import { carsPropType } from '../propTypes/cars';
import { CarViewRow } from './CarViewRow';
import { CarEditRow } from './CarEditRow';

export const CarTable = (props) => {

    return (
        <table>
            <thead>
                <tr>
                    <th>Id</th>
                    <th>Make</th>
                    <th>Model</th>
                    <th>Year</th>
                    <th>Color</th>
                    <th>Price</th>
                    <th>Actions</th>
                </tr>
            </thead>
            <tbody>
                {props.cars.map(car => car.id === props.editCarId
                    ? <CarEditRow key={car.id} car={car}
                        onSaveCar={props.onSaveCar}
                        onCancelCar={props.onCancelCar} />
                    : <CarViewRow key={car.id} car={car}
                        onEditCar={props.onEditCar}
                        onDeleteCar={props.onDeleteCar} />)}
            </tbody>
        </table>        
    );

};

CarTable.defaultProps = {
    cars: [],
};

CarTable.propTypes = {
    cars: carsPropType,
};

