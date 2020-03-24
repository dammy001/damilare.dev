import React, { Component } from 'react';
import styled, { keyframes } from 'styled-components';
import { fadeInDown, bounceIn } from 'react-animations';
import angular from './angular.svg';
import Footer from '../footer/footer';
import { Link } from 'react-router-dom';

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
            <div className="container-fluid">
                <div className="heading">
                    <FadeDiv>
                        <h3>Recent Work</h3>
                        <p>Projects I've worked on in the past</p>
                    </FadeDiv>
                </div>
                <FlipDiv>
                <div className="collection">
                    <div className="row">
                    
                        <div className="col-4">
                            <div className="card"> 
                                <img className="card-img-top" src={angular} />
                                <div className="card-body">
                                    <h4>Personal Website</h4>
                                    <p className="card-text"><Link className="card-text" to={"https://damilare.dev"}>Damilare.dev</Link></p>
                                </div>
                            </div>
                        </div>
                        
                        <div className="col-4">
                            <div className="card">
                                <img className="card-img-top" src={angular} />
                                <div className="card-body">
                                    <h4>Worshipper In Me</h4>
                                    <p className="card-text"><Link className="card-text" to={"https://worshipperinme.com"}>Worshipperinme.com</Link></p>
                                </div>
                            </div>
                        </div>
                        
                        <div className="col-4">
                            <div className="card">
                                <img className="card-img-top" src={angular} />
                                <div className="card-body">
                                    <h4>Course Recommender</h4>
                                    <p className="card-text"><Link className="card-text" to={"https://github.com/dammy001/course-recommender"}>Course Recommender</Link></p>
                                </div>
                            </div>
                        </div>
                        
                        <div className="col-4">
                            <div className="card">
                                <img className="card-img-top" src={angular} />
                                <div className="card-body">
                                    <p className="card-text">Personal Website</p>
                                </div>
                            </div>
                        </div>

                        <div className="col-4">
                            <div className="card">
                                <img className="card-img-top" src={angular} />
                                <div className="card-body">
                                    <p className="card-text">Personal Website</p>
                                </div>
                            </div>
                        </div>

                        <div className="col-4">
                            <div className="card">
                                <img className="card-img-top" src={angular} />
                                <div className="card-body">
                                    <p className="card-text">Personal Website</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                </FlipDiv>
            </div>
            <Footer />
        </div>
        
        
    }
}

export default Workdetails;