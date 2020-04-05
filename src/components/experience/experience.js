import React, { Component } from 'react';
import mainlogo from './mainlogo.svg';
import './experience.scss';
import WOW from 'wowjs';

class Experience extends Component {

    componentDidMount(){
        new WOW.WOW().init();
    }
    render() {
        return <div className="experience">
                    <div className="row">
                        <div className="wow slideInUp col-5" data-wow-offset="80" data-wow-delay="1s">
                            <div className="exp-heading">  
                                <h3>Over the past 2 years,</h3> 
                                <p className="description">
                                I've built projects ranging from basic websites to complex solutions using web technologies with focus on fast, elegant and responsive.
                                </p>
                                <p className="description">
                                Recently, I led the fullstack web developer team, where i worked remotely on a contract basis to develop worshipper in me website crafting a suite of tools and services tailored at providing robust and fast to aid performance.
                                </p>
                                <p className="description">
                                I once also worked as a web developer intern at Lagos state university where i led the backend team through building multiple applications.
                                </p>
                                <p className="description">
                                I'm now available for contracts and remote full-time roles. Want us to work together? You should <a href="mailto:damilareanjorin1@gmail.com" className="contact">contact me.</a>
                                </p>     
                            </div>
                        </div>
                        <div className="wow flipInX col-4" data-wow-delay="1.2s" data-wow-offset="80">
                            <div className="recent">
                                <img src={mainlogo} alt="Delicacy" />
                            </div>  
                        </div>
                    </div>      
                
        </div>
    }
}

export default Experience