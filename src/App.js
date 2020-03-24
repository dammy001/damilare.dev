import React from 'react';
import './App.scss';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import '../node_modules/jquery/dist/jquery.min.js';

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Login from './components/login/login';
import Register from './components/register/register';
import Workdetails from './components/work/workdetails';
import Landing from './components/landing/landing';
import Blog from './components/Blog/blog';
import Header from './components/header/header';
import Side from './components/sidebar/sidebar';


function App() {
  return (<Router>
    
    <div className="App">
      <Header />
        
      <Switch>
        <Route exact path='/' component={Landing} />
        <Route path="/login" component={Login} />
        <Route path="/register" component={Register} />
        <Route path="/work" component={Workdetails} />
        <Route path="/blog" component={Blog} />
      </Switch>
    </div>
    </Router>
  );
}

export default App;
