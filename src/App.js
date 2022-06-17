import React from 'react';
import { createStore, compose, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk';
import { Provider } from 'react-redux';

import rootReducers from './reducers';
import Page from './Page';

const store = createStore(rootReducers, composeWithDevTools(applyMiddleware(thunk)));

const App = () => {
  return(
    <Provider store={store}>
      <Page />
    </Provider>
  );
}

export default App;
