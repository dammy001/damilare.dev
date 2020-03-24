import React, { Component } from 'react';
import styled, { keyframes } from 'styled-components';
import { fadeInDown, bounceIn } from 'react-animations';
import Footer from '../footer/footer';
import { Link } from 'react-router-dom';
import './blog.scss';

const fadeAnimation = keyframes`${fadeInDown}`;
const flipAnimation = keyframes`${bounceIn};`

const FadeDiv = styled.div`
  animation: 2s ${fadeAnimation};
`;

class Blog extends Component {
    render(){
        return <div className="blog">
            <div className="container-fluid">
                <div className="heading">
                    <FadeDiv>
                        <h3>Blog</h3>
                        <p>Articles I've written in the past</p>
                    </FadeDiv>
                </div>

                <div className="article">
                    <div className="date">
                        <h5>20th January, 2020</h5>
                    </div>
                    <div className="title">
                        <h3>Authentication Using MERN Stack</h3>
                        <p>Authentication is used to validate and authorize user before gaining access to a page.</p>
                    </div>
                </div>

                <div className="article">
                    <div className="date">
                        <h5>20th January, 2020</h5>
                    </div>
                    <div className="title">
                        <h3>Authentication Using MERN Stack</h3>
                        <p>Authentication is used to validate and authorize user before gaining access to a page.</p>
                    </div>
                </div>

                <div className="article last">
                    <div className="date">
                        <h5>20th January, 2020</h5>
                    </div>
                    <div className="title">
                        <h3>Authentication Using MERN Stack</h3>
                        <p>Authentication is used to validate and authorize user before gaining access to a page.</p>
                    </div>
                </div>
            </div>

            <Footer />
        </div>
    }
}

export default Blog