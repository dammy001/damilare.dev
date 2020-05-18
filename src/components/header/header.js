import React, { Component } from 'react';
import styled, { keyframes } from 'styled-components';
import { bounce } from 'react-animations';
import { Navbar, Nav, Button } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import HamburgerMenu from 'react-hamburger-menu'

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
              <HamburgerMenu
              isOpen={this.state.active}
              menuClicked={this.toggleClass.bind(this)}
              width={28}
              height={20}
              strokeWidth={2}
              rotate={0}
              color='white'
              borderRadius={0}
              animationDuration={0.5}
              />
              </div> 
            </Nav>
        </Navbar>

      <div className={this.state.active===true ? 'nav-aside active' : 'nav-aside'}>
          <ul className="nav-aside-menu">
            <li><Link to='/work' className="link">Work</Link></li>
            <li><Link to="/resume">Resume</Link></li>
            <li><Link to='/blog' className="link">Blog</Link></li>
            <li></li>
            <li><h5>SAY HELLO</h5></li>
            <li><a href="mailto:damilareanjorin1@gmail.com">damilareanjorin1@gmail.com</a></li>
            <li><a href="facebook.com">t.me/damilare</a></li>
            <li>
                <div className="btn-group">
                  <Button href={`https://facebook.com/Damilare-Anjorin`} className="btn btn-primary facebook"><i className="fa fa-facebook"></i></Button>
                  <Button href={`https://www.linkedin.com/in/anjorin-damilare-652023162`} className="btn btn-primary linkedin"><i className="fa fa-linkedin"></i></Button>
                  <Button href={`https://twitter.com/laravel00`} className="btn btn-primary twitter"><i className="fa fa-twitter"></i></Button>
                  <Button href={`https://github.com/dammy001`} className="btn btn-primary github"><i className="fa fa-github"></i></Button>
                </div> 
            </li>
  
          </ul>
      
        </div>
        
        </div>
        );
    }
}

export default Header

