import React, { Component } from 'react';
import './contact.scss';

class Message extends Component {
    render() {
        return <div className="messageme">
            <div className="row">
                <div className="col-2"></div>
                <div className="col-8">
                    <div className="header">
                        <h3>Send me a message!</h3>
                        <p>Got a question or project for me? Go ahead.</p>

                        <div className="formcontact">
                                <form>
                                    <div className="col-5">
                                        <div className="form-group">
                                            <label>Your Name</label>
                                            <input type="text" className="form-control name" placeholder="Enter your name"></input>
                                        </div>
                                        
                                    </div>
                                    <div className="col-5 emailwrapper">
                                        <div className="form-group">
                                                <label>Your Email</label>
                                                <input type="text" className="form-control email" placeholder="Enter your email"></input>
                                            </div>
                                    </div>
                                    <div className="row">
                                        <div className="col-12">
                                            <div className="form-group">
                                                <label>Your Message</label>
                                                <input type="text" className="form-control message" placeholder="Send me a message, let's discuss"></input>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="form-group">
                                        <button type="button" className="btn btn-primary send"><i className="fa fa-arrow-right"></i> Send Message</button>
                                    </div>
                                </form>
                        </div>
                    </div>
                    
                </div>
                <div className="col-2"></div>
            </div>
        </div>
    }
}

export default Message