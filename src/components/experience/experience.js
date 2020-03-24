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
                                <p className="description">jsdfjklskfdjkldsjflksjksaflkjdskljdskljflksdjlksdjlksdjflks</p>
                                
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