import * as React from 'react';
import ReactDOM from "react-dom";
import {
	BrowserRouter as Router,
	Switch,
	Route,
	Link
  } from "react-router-dom";




import { App } from './App';




window.addEventListener('load', () => {
	ReactDOM.render(
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
	
	
	, document.getElementById('react-root'));

}); 

