import { Routes, Route } from 'react-router-dom';
import { Provider } from 'react-redux';

import { calcToolStore  } from './stores/calcToolStore';
import { carToolStore  } from './stores/carToolStore';
import { colorToolStore  } from './stores/colorToolStore';

import { Layout } from './components/Layout';
import { Home } from './components/Home';
import { ColorTool } from './components/ColorTool';
import { CarTool } from './components/CarTool';
import { CalcTool } from './components/CalcTool';


export function App() {

    return (
        <Routes>
            <Route path="/" element={<Layout />}>
                <Route index element={<Home />} />
                <Route path="color-tool" element={<Provider store={colorToolStore}>
                    <ColorTool />
                </Provider>} />
                <Route path="car-tool" element={<Provider store={carToolStore}>
                    <CarTool />
                </Provider>} />
                <Route path="calc-tool" element={<Provider store={calcToolStore}>
                    <CalcTool />
                </Provider>} />
            </Route>
        </Routes>
    );

}
