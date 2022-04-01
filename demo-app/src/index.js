import { render } from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom';

import { App } from './App';

import { ColorToolStoreProvider } from './contexts/colorToolStoreContext';

render(
    // JSX
    // React.createElement(HelloWorld)
    <Router>
        <ColorToolStoreProvider>
            <App />
        </ColorToolStoreProvider>
    </Router>,
    // #root is a CSS Selector, the # symbol means to select by id
    document.querySelector('#root'),
);

