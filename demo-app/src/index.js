import { render } from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom';

import { App } from './App';

render(
    // JSX
    // React.createElement(HelloWorld)
    <Router>
        <App />
    </Router>,
    // #root is a CSS Selector, the # symbol means to select by id
    document.querySelector('#root'),
);

