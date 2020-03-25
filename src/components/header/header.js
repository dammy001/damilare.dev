import React, { Component } from 'react';
import styled, { keyframes } from 'styled-components';
import { bounce } from 'react-animations';
import Side from '../sidebar/sidebar';

import {
    Link
  } from "react-router-dom";
//import Sidebar from './components/sidebar/sidebar';
import './header.scss';

const Bounce = styled.div`animation: 2s ${keyframes `${bounce}`}`;


class Header extends Component {
  constructor(props){
    super(props);
    this.state = {
      active: false
  }
  this.toggleClass = this.toggleClass.bind(this);
  }

  toggleClass() {
    const currentState = this.state.active;
    this.setState({ active: !currentState });
}

    render() {
        return <div className="header">
          <nav className="navbar navbar-expand-lg navbar-dark fixed-top">
        <div className="container-fluid">
          <Bounce><Link className="navbar-brand" to={"/"}>Damilare.dev</Link></Bounce>
          <button className="navbar-toggler" onClick={this.toggleClass} type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
        </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav ml-auto">
              <li className="nav-item">
                <div className="nav-btns">
                  <button className="aside-btn" onClick={this.toggleClass}><i class="fa fa-bars"></i></button> 
                </div>
              </li>
            </ul>
          </div>
        </div>
      </nav>

      <div className={this.state.active===true ? 'nav-aside active' : 'nav-aside'}>
          <ul className="nav-aside-menu">
            <li><a href="/work">Work</a></li>
            <li><a href={`https://gitconnected.com/dammy001/resume`} target="_blank" 
            rel="noopener noreferrer">Resume</a>
            </li>
            <li><a href="/blog">Blog</a></li>
            <li></li>
            <li><h5>SAY HELLO</h5></li>
            <li><a href="mailto:damilareanjorin1@gmail.com">damilareanjorin1@gmail.com</a></li>
            <li><a href="#">t.me/damilare</a></li>
            <li>
                <div className="btn-group">
                  <button type="button" className="btn btn-primary facebook"><i className="fa fa-facebook"></i></button>
                  <button type="button" className="btn btn-primary linkedin"><i className="fa fa-linkedin"></i></button>
                  <button type="button" className="btn btn-primary twitter"><i className="fa fa-twitter"></i></button>
                  <button type="button" className="btn btn-primary github"><i className="fa fa-github"></i></button>
                </div> 
            </li>
  
          </ul>
          <button onClick={this.toggleClass} className={this.state.active===true ? 'nav-close nav-aside-close' : null}><span></span></button>
        </div>
        
        </div>
    }
}

export default Header

