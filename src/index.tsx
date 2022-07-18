import * as React from 'react';
import ReactDOM from "react-dom";
import { Provider } from 'react-redux';
import {
	BrowserRouter as Router,
	Switch,
	Route,
	Link
  } from "react-router-dom";
// import { createStore } from 'redux';
  import { App } from './App';


import { rootReducer } from './store/reducer';
import { createStore, applyMiddleware } from 'redux';

import { composeWithDevTools } from 'redux-devtools-extension';
import thunk, { ThunkAction } from 'redux-thunk';
  
  

const store = createStore(rootReducer, composeWithDevTools(
    applyMiddleware(thunk)
));

window.addEventListener('load', () => {
	ReactDOM.render(
    <Provider store={store}>
      <Router>
            <Switch>
              <Route exact path="/">
                <App />
              </Route>
              <Route path="/auth">
                <App />
              </Route>
            </Switch>
        </Router>
    </Provider>
	, document.getElementById('react-root'));

}); 

