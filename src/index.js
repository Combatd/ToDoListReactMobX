import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App';
import registerServiceWorker from './registerServiceWorker';

import { Provider } from 'mobx-react';
import TodoStore from './stores/TodoStore';

// const Root = {
//     Provider
// }

ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();
