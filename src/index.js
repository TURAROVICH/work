import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

//store
import {createStore,compose,applyMiddleware} from 'redux'
import thunk from 'redux-thunk';
import { rootReducer } from './store/rootReducer';
import {Provider} from 'react-redux'
const store = createStore(rootReducer,compose(
  applyMiddleware(thunk),
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
))
//endstore
ReactDOM.render(
  <Provider store={store}>
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </Provider>,
  document.getElementById('root')
);

reportWebVitals();
