import React, { Component } from 'react';
import styled, { keyframes } from 'styled-components';
import { fadeInDown, bounceIn } from 'react-animations';
import angular from './angular.svg';
import Footer from '../footer/footer';
import { Link } from 'react-router-dom';
import { Container, Row, Col } from 'react-bootstrap'
import {CircleArrow as ScrollUpButton} from "react-scroll-up-button";

const fadeAnimation = keyframes`${fadeInDown}`;
const flipAnimation = keyframes`${bounceIn};`

const FadeDiv = styled.div`
  animation: 2s ${fadeAnimation};
`;
const FlipDiv = styled.div`
    animation: 3s ${flipAnimation}
`;

class Workdetails extends Component {
    render(){
        return <div className="workdetails">
            <Container fluid>
                    <div className="heading">
                        <FadeDiv>
                            <h3>Recent Work</h3>
                            <p>Projects I've worked on in the past</p>
                        </FadeDiv>
                    </div>

                    <div className="collection">
                        <Row>
                            <Col md={4} sm={1}>
                            <div className="card"> 
                                <img className="card-img-top" src={angular} alt="damilaredev"/>
                                <div className="card-body">
                                    <h4>Personal Website</h4>
                                    <p className="card-text"><a className="card-text" href="https://damilare.dev"
                                     target="_blank" rel="noopener noreferrer">Damilare.dev</a></p>
                                </div>
                            </div>
                            </Col>

                            <Col md={4} sm={1}>
                            <div className="card"> 
                                <img className="card-img-top" src={angular} alt="damilaredev"/>
                                <div className="card-body">
                                    <h4>Worshipper In Me</h4>
                                    <p className="card-text"><a className="card-text" href="https://worshipperinmetv.com"
                                     rel="noopener noreferrer" target="_blank">Worshipper In Me</a></p>
                                </div>
                            </div>
                            </Col>

                            <Col md={4} sm={1}>
                            <div className="card"> 
                                <img className="card-img-top" src={angular} alt="damilaredev"/>
                                <div className="card-body">
                                    <h4>Chore APIs</h4>
                                    <p className="card-text"><a className="card-text" href="#">Chore APIs Documentation</a></p>
                                </div>
                            </div>
                            </Col>
                        </Row>

                        <Row style={{marginTop: '2em'}}>
                            <Col md={4} sm={1}>
                            <div className="card"> 
                                <img className="card-img-top" src={angular} alt="damilaredev"/>
                                <div className="card-body">
                                    <h4>MyprojectNG</h4>
                                    <p className="card-text"><a className="card-text" href="#">Still Under Development</a></p>
                                </div>
                            </div>
                            </Col>

                            <Col md={4} sm={1}>
                            <div className="card"> 
                                <img className="card-img-top" src={angular} alt="damilaredev"/>
                                <div className="card-body">
                                    <h4>Booke APIs</h4>
                                    <p className="card-text"><a className="card-text" href="#">Booke APIs Documentation</a></p>
                                </div>
                            </div>
                            </Col>
                        </Row>
                    </div>
            </Container>
           
         <Footer />
         <ScrollUpButton />
        </div>
        
        
    }
}

export default Workdetails;