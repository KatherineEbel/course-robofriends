import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import './index.css';
import App from './containers/App';
import { createStore } from 'redux';
import { searchRobots } from './reducers';
import registerServiceWorker from './registerServiceWorker';
import 'tachyons';

const store = createStore(searchRobots);
const app = (
  <Provider store={store}>
    <App/>
  </Provider>
)
ReactDOM.render(app, document.getElementById('root'));
registerServiceWorker();
