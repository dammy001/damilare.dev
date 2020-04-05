import React, { Component } from 'react';
import './landing.scss';
import mainlogo from './mainlogo.svg';
import Button from './buttons';
import Experience from '../experience/experience';
import Work from '../work/work';
import Message from '../contact/contact';
import Footer from '../footer/footer';
import WOW from 'wowjs';

class Landing extends Component {

    componentDidMount() {
        new WOW.WOW().init()
    }
    
    render() {
        return <div className="mainpage">
                <div class="container-fluid">
                    <div className="row">
                    <div className="wow slideInUp col-7" data-wow-offset="70" data-wow-delay="0.5s">
                            <div className="heading">  
                                <h3>Fullstack Web Developer.</h3>
                                <p className="description">Damilare Anjorin is an energetic, creative, and result oriented fullstack developer with proven track records based in Lagos, Nigeria.</p>                                
                                <Button />
                            </div>
                        </div>
                        
                        <div className="wow bounceIn col-4" data-wow-offset="70" data-wow-delay="1s">
                            <div className="registerBtn">
                                <img src={mainlogo} alt="Delicacy" />
                            </div>  
                        </div>
                    </div>      
                </div>

                <Work />

                <Experience />

                <Message />

                <Footer />
            </div>
    }
}

export default Landing