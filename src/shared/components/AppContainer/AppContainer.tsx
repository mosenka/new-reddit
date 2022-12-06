import React, { useEffect, useState } from 'react';
import { Provider, useDispatch } from 'react-redux';
import { 
  Redirect, 
  BrowserRouter as Router,
  Route, 
  Switch } from 'react-router-dom';
import { applyMiddleware, createStore } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk';
import { rootReducer, saveToken } from '../../store/reducer';
import { Error404 } from '../Error404';
import { MainPage } from '../MainPage';
import { Post } from '../Post';
import styles from './appcontainer.css';



const store = createStore(rootReducer, composeWithDevTools(
    applyMiddleware(thunk)
));



export function AppContainer() {

  const [mounted, setMounted] = useState(false);

  

  useEffect(() => {
    setMounted(true);
  }, [])

 



  return (<> 
    <Provider store={store}>
      { mounted && <Router>
          <Switch>
            <Route exact path="/posts">
              <MainPage />
            </Route>
            <Route path="/posts/:id">
              <Post />
              <MainPage />
              {/* <App /> */}
            </Route>
            <Route path="/auth" render={({ location }) =>  <Redirect strict to={`/posts${location.hash}`} /> } />
            <Route exact path="/">
              <Redirect to="/posts" />
            </Route>
            <Route component={Error404}/>
          </Switch>
        </Router> }
    </Provider>
  </>);
}
