import { Routes, Route } from 'react-router-dom';

import { Layout } from './components/Layout';
import { HelloWorld } from './components/HelloWorld';


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