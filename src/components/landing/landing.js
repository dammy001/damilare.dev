import React, { Component } from 'react';
import './landing.scss';
import mainlogo from './mainlogo.svg';
import Button from './buttons';
import Experience from '../experience/experience';
import Techstack from '../techstack/techstack';
import Work from '../work/work';
import Message from '../contact/contact';
import Footer from '../footer/footer';

class Landing extends Component {
    constructor(props){
        super(props)
    }

    render() {
        return <div className="mainpage">
                <div class="container-fluid">
                    <div className="row">
                        <div className="col-7">
                            <div className="heading">  
                                <h3>Fullstack Web Developer.</h3> 
                                <p className="description">Damilare Anjorin is an energetic, creative, and result oriented fullstack developer with proven track records.</p>
                                <Techstack />
                                <Button />
                            </div>
                        </div>
                        <div className="col-4">
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