import React, { Suspense, lazy } from 'react';
import ReactDOM from 'react-dom';
import './index.css';

import { Route, Link, BrowserRouter as Router } from 'react-router-dom'
import App from './App'
//import Users from './users'
 
import Contact from './contact'
import NavBar from './NavBar'
import * as serviceWorker from './serviceWorker';

const Users = lazy(() => import('./users'));
const routing = (
  <Router>
  <Suspense fallback={<div>Loading...</div>}>
    <div>
      <NavBar />
      <Route exact path="/" component={App} />
      <Route path="/users" component={Users} />
      <Route path="/contact" component={Contact} />
    </div>
    </Suspense>
  </Router>
)

ReactDOM.render(routing, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
