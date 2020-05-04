import React, { Component } from 'react';
import styled, { keyframes } from 'styled-components';
import { bounce } from 'react-animations';
import { Navbar, Button, Nav } from 'react-bootstrap'

const Bounce = styled.div`animation: 2s ${keyframes `${bounce}`}`;

class Header extends Component {

  constructor(props){
    super(props);
    this.state = {
      active: false
  }
  
  this.toggleClass = this.toggleClass.bind(this);
  }

  toggleClass = () => {
    const currentState = this.state.active;
    this.setState({ active: !currentState });
}

    render() {
        return (<div className="header">
        <Navbar className="navbar-dark" fixed="top">
          <Navbar.Brand className="navbar-brand" href="/"><Bounce>Damilare.dev</Bounce></Navbar.Brand>
            <Nav className="mr-auto">

            </Nav>
            <Nav>
              <div className="nav-btns">
                <Button className="aside-btn" onClick={this.toggleClass}><i className="fa fa-bars"></i></Button>
              </div> 
            </Nav>
        </Navbar>

      <div className={this.state.active===true ? 'nav-aside active' : 'nav-aside'}>
          <ul className="nav-aside-menu">
            <li><a href="/work">Work</a></li>
            <li><a href="https://gitconnected.com/dammy001/resume" target="_blank" 
            rel="noopener noreferrer">Resume</a>
            </li>
            <li><a href="/blog">Blog</a></li>
            <li></li>
            <li><h5>SAY HELLO</h5></li>
            <li><a href="mailto:damilareanjorin1@gmail.com">damilareanjorin1@gmail.com</a></li>
            <li><a href="facebook.com">t.me/damilare</a></li>
            <li>
                <div className="btn-group">
                  <button type="button" className="btn btn-primary facebook"><i className="fa fa-facebook"></i></button>
                  <button type="button" className="btn btn-primary linkedin"><i className="fa fa-linkedin"></i></button>
                  <button type="button" className="btn btn-primary twitter"><i className="fa fa-twitter"></i></button>
                  <button type="button" className="btn btn-primary github"><i className="fa fa-github"></i></button>
                </div> 
            </li>
  
          </ul>
            <button onClick={ this.toggleClass } className={ this.state.active===true ? 'nav-close nav-aside-close' : null }><span></span></button>
        </div>
        
        </div>
        );
    }
}

export default Header

