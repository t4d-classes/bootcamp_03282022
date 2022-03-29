import { Routes, Route } from 'react-router-dom';

import { Layout } from './components/Layout';
import { Home } from './components/Home';
import { ColorTool } from './components/ColorTool';
import { CarTool } from './components/CarTool';

const carList = [
    { id: 1, make: 'Bugati', model: 'Chiron Supersport', year: 2022, color: 'blue', price: 3825000 },
    { id: 2, make: 'Ford', model: 'Fusion Hybrid', year: 2020, color: 'red', price: 45000 },
];


export function App() {

    return (
        <Routes>
            <Route path="/" element={<Layout />}>
                <Route index element={<Home />} />
                <Route path="color-tool" element={<ColorTool />} />
                <Route path="car-tool" element={<CarTool cars={carList} />} />
            </Route>
        </Routes>
    );

}

// <CarTool cars={carList} headerText="Car Tool" />
// React.createElement(CarTool, { cars: carList, headerText: "Car Tool "})