import React, { Component } from 'react';
import styled, { keyframes } from 'styled-components';
import { bounce } from 'react-animations';

import {
    Link
  } from "react-router-dom";
//import Sidebar from './components/sidebar/sidebar';
import './header.scss';

const Bounce = styled.div`animation: 2s ${keyframes `${bounce}`}`;


class Header extends Component {
  constructor(props){
    super(props);

    this.state = { isActive :true } ;
  }

  ToggleClass = (e) => {
    this.setState({ isActive: !this.state.isActive })
  }
    render() {
        return <div className="header">
          <nav className="navbar navbar-expand-lg navbar-dark fixed-top">
        <div className="container-fluid">
          <Bounce><Link className="navbar-brand" to={"/"}>Damilare.dev</Link></Bounce>
          <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
        </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav ml-auto">
              <li className="nav-item">
                <div className="nav-btns">
                  <button className="aside-btn"><i class="fa fa-bars"></i></button> 
                </div>
              </li>
              {/* <li className="nav-item">
                <Link className="nav-link link" to={"/work"}>Work</Link>
              </li>
              <li className="nav-item">
                <a className="resume" href={`https://gitconnected.com/dammy001/resume`}
                  target="_blank"
                  rel="noopener noreferrer"
                  >Resume</a>
                
              </li>
              <li className="nav-item">
                <Link className="nav-link link" to={"/blog"}>Blog</Link>
              </li>

              <li className="nav-item">
                <div className="btn-group">
                  <button type="button" className="btn btn-primary facebook"><i className="fa fa-facebook"></i></button>
                  <button type="button" className="btn btn-primary linkedin"><i className="fa fa-linkedin"></i></button>
                  <button type="button" className="btn btn-primary twitter"><i className="fa fa-twitter"></i></button>
                  <button type="button" className="btn btn-primary github"><i className="fa fa-github"></i></button>
                </div> 
              </li> */}
              
            </ul>
          </div>
        </div>
      </nav>
          
          

          <div className="nav-aside">
          <ul className="nav-aside-menu">
            <li><a href="/">Home</a></li>
                  <li className="has-dropdown"><a href="#">Gospel Music</a>
              <ul className="dropdown">
                <li><a href="http://worshipperinme.herokuapp.com/musics">New Release</a></li>
                <li><a href="#">Featured Music</a></li>
                <li><a href="#">Christian Hip-Hop</a></li>
                <li><a href="#">Foreign Gospel Music</a></li>
                <li><a href="#">Yoruba Gospel Music</a></li>
              </ul>
                      </li>
                      <li><a href="http://worshipperinme.herokuapp.com/depth">Depth In Worship</a></li>
                      <li><a href="http://worshipperinme.herokuapp.com/events">Events</a></li>
                      <li class="has-dropdown">
                      <a href="#">Messages</a>
                          <div class="dropdown">
                              <div class="dropdown-body">
                                  <ul class="dropdown-list">
                                  <li><a href="http://worshipperinme.herokuapp.com/message/joshuaselman">Apostle Joshua Selman</a></li>
                                      <li><a href="http://worshipperinme.herokuapp.com/message/deboadesina">Pastor Debo Adesina</a></li>
                                  <li><a href="http://worshipperinme.herokuapp.com/events/wafbec2020">Wafbec 2020</a></li>
                                      <li><a href="http://worshipperinme.herokuapp.com/messages">Others</a></li>
                                  </ul>
                              </div>
                          </div>
                      </li>
                      <li><a href="http://worshipperinme.herokuapp.com/events">Events</a></li>
            <li><a href="http://worshipperinme.herokuapp.com/blog">Blog</a></li>
  
                  <li><a href="http://worshipperinme.herokuapp.com/contact">Contact Us</a></li>
  
          </ul>
          <button className="nav-close nav-aside-close"><span></span></button>
        </div>
        </div>
        
        
        {/* <nav className="navbar navbar-expand-lg navbar-dark fixed-top">
        <div className="container-fluid">
          <Bounce><Link className="navbar-brand" to={"/"}>Damilare.dev</Link></Bounce>
          <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
        </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav ml-auto">
              <li className="nav-item">
                <Link className="nav-link link" to={"/work"}>Work</Link>
              </li>
              <li className="nav-item">
                <a className="resume" href={`https://gitconnected.com/dammy001/resume`}
                  target="_blank"
                  rel="noopener noreferrer"
                  >Resume</a>
                
              </li>
              <li className="nav-item">
                <Link className="nav-link link" to={"/blog"}>Blog</Link>
              </li>

              <li className="nav-item">
                <div className="btn-group">
                  <button type="button" className="btn btn-primary facebook"><i className="fa fa-facebook"></i></button>
                  <button type="button" className="btn btn-primary linkedin"><i className="fa fa-linkedin"></i></button>
                  <button type="button" className="btn btn-primary twitter"><i className="fa fa-twitter"></i></button>
                  <button type="button" className="btn btn-primary github"><i className="fa fa-github"></i></button>
                </div> 
              </li>

            </ul>
          </div>
        </div>
      </nav> */}
      
    }
}

export default Header

