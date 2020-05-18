import React, { Component } from 'react';
import laravel from '../images/laravel.svg';
import js from '../images/js.png'
import node from '../images/node.png'
import bootstrap from '../images/bootstrap.png'
import git from '../images/git.png'
import sass from '../images/sass.svg'
import WOW from 'wowjs';
import { Container, Row, Col, Image } from 'react-bootstrap'

class Experience extends Component {

    componentDidMount(){
        new WOW.WOW().init();
    }
    render() {
        return (<div className="experience">
            <Container fluid>
                <Row>
                    <Col md={5}>
                        <div className="wow slideInUp">
                            <div className="exp-heading">  
                                <h3 className="head">Over the past 2 years,</h3> 
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
                    </Col>
                    <Col md={2}></Col>

                    <Col md={5} sm={4}>
                        <Container>
                            <Row>
                                <div className="recent">
                                <Image className="wow flipInX imagename" data-wow-delay="0.5s" data-wow-offset="80" src={laravel} alt="Delicacy" />
                                <Image className="wow flipInX imagename" data-wow-delay="1s" data-wow-offset="80" src={js} alt="Delicacy" />
                                <Image className="wow flipInX imagename" data-wow-delay="1.2s" data-wow-offset="80" src={bootstrap} alt="Delicacy" />
                                
                                </div> 
                            </Row>
                            <Row>
                            <div className="recent">
                                <Image className="wow flipInX imagename" data-wow-delay="1.4s" data-wow-offset="80" src={node} alt="Delicacy" />
                                <Image className="wow flipInX imagename" data-wow-delay="1.6s" data-wow-offset="80" src={git} alt="Delicacy" />
                                <Image className="wow flipInX imagename" data-wow-delay="1.8s" data-wow-offset="80" src={sass} alt="Delicacy" />
                            </div>
                            
                            </Row>
                        </Container>
                    </Col>
                </Row>
            </Container>
        </div>)
    }
}

export default Experience