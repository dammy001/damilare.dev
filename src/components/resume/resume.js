import React, { Component } from 'react';
import Footer from '../footer/footer';
import { Container, Row, Col, Card } from 'react-bootstrap'
import data from '../data/resume'
import Experience from './Experience'
import './resume.scss';

const basicsInfo = data.basics;
class Resume extends Component {

    render() {
    
        return (
            <div className="mainpage">
                <Container fluid className="header">
                    <Row>
                        <Col md={1}></Col>
                        <Col md={10}>
                            <div className="wrapper">
                                <div className="card"> 
                                    <div className="card-body">
                                        <Row>
                                            <Col md={3}>
                                                <Row>
                                                    <p><a href={basicsInfo.website}>damilare.dev</a></p>
                                                </Row>
                                                <Row>
                                                    <p>{basicsInfo.location}</p>
                                                </Row>
                                                 <Row>
                                                    <p><a href="mailto:damilareanjorin1@gmail.com">{basicsInfo.mail}</a></p>
                                                 </Row>
                                                
                                            </Col>
                                            <Col md={1}></Col>
                                            <Col md={7}>
                                                <Row>
                                                    <h1>{basicsInfo.name}</h1>
                                                </Row>
                                                <Row>
                                                    <h4>{basicsInfo.role}</h4>
                                                </Row>
                                                <Row className="description">
                                                    <h6>{basicsInfo.description}</h6>
                                                </Row>
                                                
                                                <Row className="expe">
                                                    <Experience />
                                                </Row>
                                            </Col>
                                        </Row>
                                    </div>
                                </div>
                            </div>
                        </Col>
                        <Col md={1}></Col>
                    </Row>         

            </Container>  
        </div>)
    }
}

export default Resume