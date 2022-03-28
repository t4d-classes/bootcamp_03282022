import { Routes, Route } from 'react-router-dom';

import { Layout } from './components/Layout';
import { Home } from './components/Home';
import { ColorTool } from './components/ColorTool';


export function App() {

    return (
        <Routes>
            <Route path="/" element={<Layout />}>
                <Route index element={<Home />} />
                <Route path="color-tool" element={<ColorTool />} />
            </Route>
        </Routes>
    );

}