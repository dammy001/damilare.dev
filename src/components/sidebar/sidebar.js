import React, { Component } from 'react';
import './sidebar.scss';

class Side extends Component {
    constructor(props){
        super(props)
        this.state = {
            active: false
        }
        this.toggleClass = this.toggleClass.bind(this);
    }
    toggleClass() {
        const currentState = this.state.active;
        this.setState({ active: !currentState });
        console.log(this.state.active)
    }

    render() {
        return (
            
         <div className={this.state.active===true ? 'nav-aside active' : 'nav-aside'}>
          <ul className="nav-aside-menu">
            <li><a href="#">Work</a></li>
            <li><a href="#">Resume</a></li>
            <li><a href="#">Blog</a></li>
            <li></li>
            <li><h5>SAY HELLO</h5></li>
            <li><a href="#">damilareanjorin1@gmail.com</a></li>
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
          <button className="nav-close nav-aside-close"><span></span></button>
        </div>
        )
    }
}

export default Side