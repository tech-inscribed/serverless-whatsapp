import { createBrowserHistory } from 'history';
import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';
import { createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import { Provider } from 'react-redux';
import { Router } from 'react-router-dom';

import { rootReducer, initialState } from './reducers';
import { epicMiddleware } from './epics';
import ThemeProvider from './components/ThemeProvider/ThemeProvider';

const history = createBrowserHistory();

const composeEnhancer = composeWithDevTools({
  name: "serverless-whatsapp"
});

// Create the redux store
const store = createStore(rootReducer, initialState, composeEnhancer(applyMiddleware(epicMiddleware)));

ReactDOM.render(
  (
    <Provider store={store}>
      <ThemeProvider>
        <Router history={history}>
          <App />
        </Router>
      </ThemeProvider>
    </Provider>
  ), document.getElementById('root')
);
