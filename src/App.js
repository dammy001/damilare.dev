import React from 'react';
import './App.scss';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import '../node_modules/jquery/dist/jquery.min.js';

import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";

import Workdetails from './components/work/workdetails';
import Landing from './components/landing/landing';
import Blog from './components/Blog/blog';
import Header from './components/header/header';
import Resume from './components/resume/resume';



function App() {
  return (<Router>
    
    <div className="App">
    
      <Header />
        
      <Switch>
        <Route exact path='/' component={Landing} />
        <Route path="/work" component={Workdetails} />
        <Route path="/resume" component={Resume} />
        <Route path="/blog" component={Blog} />
      </Switch>
    </div>
    </Router>
  );
}

export default App;
