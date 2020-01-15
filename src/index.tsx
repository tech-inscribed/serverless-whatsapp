import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';
import { createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import { Provider } from 'react-redux';

import { rootReducer, initialState } from './reducers';
import { epicMiddleware } from './epics';

const composeEnhancer = composeWithDevTools({
  name: "serverless-whatsapp"
})

// Create the redux store
const store = createStore(rootReducer, initialState, composeEnhancer(applyMiddleware(epicMiddleware)));

ReactDOM.render(
  (
    <Provider store={store}>
      <App />
    </Provider>
  ), document.getElementById('root')
);
