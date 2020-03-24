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
    render() {
        return <nav className="navbar navbar-expand-lg navbar-dark fixed-top">
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
                <Link className="nav-link link" to={"/business"}>Resume</Link>
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
      </nav>
      
    }
}

export default Header

