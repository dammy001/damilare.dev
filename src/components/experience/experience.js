import React, { Component } from 'react';
import mainlogo from './mainlogo.svg';
import './experience.scss';

class Experience extends Component {
    render() {
        return <div className="experience">
                    <div className="row">
                        <div className="col-5">
                            <div className="exp-heading">  
                                <h3>Over the past 2 years,</h3> 
                                <p className="description">
                                I've built products for companies and businesses around the globe ranging from basic websites to complex solutions and enterprise apps with focus on fast, elegant and accessible user experiences.

Most recently, I was Principal Frontend Software Engineer at hellotax crafting a suite of tools and services tailored at providing robust and fast VAT Registration & Returns solutions for all kinds of traders across Europe.

Before then, I was a Senior frontend engineering contractor with Pixel2HTML building JavaScript applications and interfaces for orgs and individuals.

I once also led the frontend team at a Russian startup, Conectar through building multiple React applications into a single powerful online learning platform.

I'm now available for contracts and remote full-time roles. Want us to work together? You should contact me.
                                </p>
                                
                            </div>
                        </div>
                        <div className="col-4">
                            <div className="recent">
                                <img src={mainlogo} alt="Delicacy" />
                            </div>  
                        </div>
                    </div>      
                
        </div>
    }
}

export default Experience