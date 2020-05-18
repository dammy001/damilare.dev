import React, { Component } from 'react';
import logo from '../images/dev4.svg';
import ButtonClass from './buttons';
import Experience from '../experience/experience';
import Work from '../work/work';
import Contact from '../contact/contact';
import Footer from '../footer/footer';
import WOW from 'wowjs';
import { Container, Row, Col, Image } from 'react-bootstrap'
import {CircleArrow as ScrollUpButton} from "react-scroll-up-button";

class Landing extends Component {

    componentDidMount() {
        new WOW.WOW().init()
    }
    
    render() {
        return <div className="mainpage">
            <Container fluid className="header">
                <Row>
                    <Col md={6} sm={4}>
                        <div>
                            <div className="heading">  
                                <h3><span>Fullstack</span> Web Developer.</h3>
                                <p className="description">Damilare Anjorin is an energetic, creative, and result oriented fullstack developer with proven track records based in Lagos, Nigeria.</p>                                
                                <ButtonClass />
                            </div>
                        </div>
                    </Col>
                    <Col md={1}></Col>
                    <Col md={5}>
                        <Image className="image" src={logo} alt="Delicacy" fluid />
                    </Col>
                </Row>
            </Container>

            <Experience />

            <Work />
            
            <Contact />

            <Footer />

            <ScrollUpButton />
               
        </div>
    }
}

export default Landing