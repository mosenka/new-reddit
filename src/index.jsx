import * as React from 'react';
import ReactDOM from "react-dom";
import {
	BrowserRouter as Router,
	Switch,
	Route,
	Link
  } from "react-router-dom";

import { composeWithDevTools } from 'redux-devtools-extension';

import { Provider} from 'react-redux';

import { rootReducer } from './store';


import { createStore } from 'redux';

const store = createStore(rootReducer, composeWithDevTools());


import { App } from './App';




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

