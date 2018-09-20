import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import './index.css';
import App from './containers/App';
import { createStore, applyMiddleware, combineReducers } from 'redux';
import thunk from 'redux-thunk';
import { createLogger } from 'redux-logger';
import { searchRobots } from './reducers';
import { requestRobots } from './reducers';
import registerServiceWorker from './registerServiceWorker';
import 'tachyons';

const rootReducer = combineReducers({
  searchRobots,
  requestRobots
});

const logger = createLogger();
const store = createStore(
  rootReducer,
  applyMiddleware(thunk, logger)
);
const app = (
  <Provider store={store}>
    <App/>
  </Provider>
)
ReactDOM.render(app, document.getElementById('root'));
registerServiceWorker();
