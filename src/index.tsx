import * as React from 'react';
import ReactDOM from "react-dom";
import { Provider } from 'react-redux';
import {
	BrowserRouter as Router,
	Switch,
	Route,
	Link,
  Redirect
  } from "react-router-dom";
// import { createStore } from 'redux';
  import { App } from './App';


import { rootReducer } from './store/reducer';
import { createStore, applyMiddleware } from 'redux';

import { composeWithDevTools } from 'redux-devtools-extension';
import thunk, { ThunkAction } from 'redux-thunk';
import { Post } from './components/Post';
import { Error404 } from './components/Error404';
  
  

const store = createStore(rootReducer, composeWithDevTools(
    applyMiddleware(thunk)
));

window.addEventListener('load', () => {
	ReactDOM.render(
    <Provider store={store}>
      <Router>
          <Switch>
            
            <Route exact path="/posts">
              <App />
            </Route>
            <Route path="/posts/:id">
              <Post />
              <App />
            </Route>
            <Route path="/auth" render={({ location }) =>  <Redirect strict to={`/posts${location.hash}`} /> } />
            <Route exact path="/">
              <Redirect to="/posts" />
            </Route>
            <Route component={Error404}/>
          </Switch>
        </Router>
    </Provider>
	, document.getElementById('react-root'));

}); 

