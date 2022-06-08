import React from 'react';
import './style.css';
import 'normalize.css';
import App from './containers/app';
import reportWebVitals from './reportWebVitals';
import { createRoot } from 'react-dom/client';
import {createStore} from 'redux';
import {Provider} from 'react-redux';
import rootReducer from './reducers';
// import initialState from './store/initialState';

const store = createStore(rootReducer, JSON.parse(localStorage['redux-store']));
store.subscribe(()=>{
  localStorage['redux-store'] = JSON.stringify(store.getState())
})
const container = document.getElementById('app');
const root = createRoot(container);
root.render(
  <React.StrictMode>
    <Provider store={store}>
        <App />
    </Provider>
  </React.StrictMode>,
  
);
reportWebVitals();
 