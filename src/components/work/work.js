import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './work.scss';
import WOW from 'wowjs';
import { Container, Row, Col, Button } from 'react-bootstrap'

class Work extends Component {

    componentDidMount() {
        new WOW.WOW().init();
    }
    render() {
        return <div className="work">
            <Container fluid>
                <Row>
                   
                    <Col md={6} sm={2}>
                        <div className="build">
                            <div className="article">
                                <h1>I build & design stuff</h1>
                                <p>Open source projects, web apps, mobile apps and experimentals.</p>
                                <Link to='/work' className="btn btn-primary send">See my work</Link>
                            </div>
                        </div>
                    </Col>
                    <Col md={6} sm={2}>
                        <div className="write">
                            <div className="article">
                                <h1>I write articles, sometimes</h1>
                                <p>About backend dev, frontend dev, mobile dev, dev tutorials and development</p>
                                <Link to='/blog' className="btn btn-primary send">Read my articles</Link>
                            </div>
                        </div>
                    </Col>
                
                </Row>        
            </Container>
           {/*  <div className="wow slideInUp row" data-wow-offset="90" data-wow-delay="0.5s">
               <div className="col-5 build">
                    <div className="article">
                        <h1>I build & design stuff</h1>
                        <p>Open source projects, web apps, mobile apps and experimentals.</p>
                        <Link to='/work' className="btn btn-primary send">See my work</Link>
                    </div>
                </div>
                
                <div className="col-5 write">
                    <div className="article">
                        <h1>I write articles, sometimes</h1>
                        <p>About backend dev, frontend dev, mobile dev, dev tutorials and development</p>
                        <Link to='/blog' className="btn btn-primary send">Read my articles</Link>
                    </div>
                </div>
            </div> */}
        </div>
    }
}

export default Work