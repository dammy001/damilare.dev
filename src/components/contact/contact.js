import React, { Component } from 'react';
import { validate } from 'indicative/validator';
import axios from 'axios';
import styled from 'styled-components';
import WOW from 'wowjs';
import { Container, Row, Col, Form } from 'react-bootstrap'

const Button = styled.button`

    display: ${props => props.block ? "block" : "none"};
    color: white;
    font-size: 1em;
    width: 93%;
    background: rgb(21, 172, 89);
    margin: 1em;
    letter-spacing: 0.1em;
    text-transform: uppercase;
    padding: 13px;
    border: none;
    border-radius: 3px;
    box-sizing: border-box;
`;

const Label = styled.label`
    float: left;
    color: #fff;
`;

class Message extends Component {

    componentDidMount() {
        new WOW.WOW().init();
    }
    constructor(props){
        super(props);

        this.state = {
            name: '',
            email: '',
            message: '',
            errorMessage: '',
            contactmsg: ''
        }
        this.handleInputChange = this.handleInputChange.bind(this)
        this.submitHandler = this.submitHandler.bind(this)
    }

    submitHandler = (event) => {
        event.preventDefault();
        console.log(this.state);

        const data = this.state;

        const rules = {
            name: 'required|string',
            email: 'required|email',
            message: 'required|string'
        };

        const messages = {
            required: (field) => `${field} is required`,
            'email.email': 'Please Enter valid email address',
        }

        validate( data, rules, messages )
            .then(() => {
               // console.log('success');
               const contactObject = {
                   name: this.state.name,
                   email: this.state.email,
                   message: this.state.message
               }
               console.log(contactObject);

               axios.post('http://localhost:4000/send', contactObject)
               .then(res => {
                   console.log(res.data)
                   if(res.data.status === "success"){
                       this.setState({contactmsg: "Message Sent Successfully"})
                   }else{
                       this.setState({contactmsg: "An error has occured"})
                   }
               })
               .catch(err => console.log(err))
                
            })
            .catch(errors => {
                console.log(errors);
                const formattedErrors = {}
                errors.forEach( error => formattedErrors[error.field] = error.message)
                console.log(formattedErrors.field);
                this.setState({errorMessage: formattedErrors});
                
            })
    }
    handleInputChange = (event) => {
        this.setState({
            [event.target.name]: event.target.value
        });
    }

    render() {
        return <div className="messageme">
            <Container>
                <Row>
                    <Col md={3}></Col>
                    <Col md={6} sm={2}>
                        <div className="head">
                            <h3>Send me a message!</h3>
                            <p>Got a question or project for me? Go ahead.</p>
                        </div>

                        
                        <div ClassName="formcontact" style={{marginTop: '4em'}}>
                            
                        <Form>
                           <Form.Row>
                           <Form.Group as={Col} controlId="formGridName">
                               <Label><label>Your Name</label></Label>
                               <Form.Control type="text" placeholder="Enter Your Name" />
                           </Form.Group>
                       
                           <Form.Group as={Col} controlId="formGridEmail">
                                <Label><label>Your Email</label></Label>
                               <Form.Control type="email" placeholder="Enter Your Email" />
                           </Form.Group>
                           </Form.Row>
                       
                           <Form.Group controlId="exampleForm.ControlTextarea1">
                           <Label><label>Message</label></Label>
                           <Form.Control as="textarea" rows={4} placeholder="Send me a message, let's discuss"/>
                           </Form.Group>
                       
                           <Button block>
                           <i className="fa fa-arrow-right"></i> Shoot Me
                           </Button>
                        </Form> 
                       </div>
                        
                    </Col>
                </Row>
            </Container>
           
           {/*  <div className="row">
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
                                            <input type="text" className="form-control name" id="name" onChange={this.handleInputChange} name="name" placeholder="Enter your name"></input>
                                            { this.state.errorMessage.fullname &&
                                            <h3 className="error"> { this.state.errorMessage.fullname } </h3> }
                                        </div>
                                        
                                    </div>
                                    <div className="col-5 emailwrapper">
                                        <div className="form-group">
                                                <label>Your Email</label>
                                                <input type="text" className="form-control email" onChange={this.handleInputChange} name="email" placeholder="Enter your email"></input>
                                                { this.state.errorMessage.email &&
                                                <h3 className="error"> { this.state.errorMessage.email } </h3> }
                                            </div>
                                    </div>
                                    <div className="row">
                                        <div className="col-12">
                                            <div className="form-group">
                                                <label>Your Message</label>
                                                <input type="text" className="form-control message" name="message" onChange={this.handleInputChange} placeholder="Send me a message, let's discuss"></input>
                                                { this.state.errorMessage.message &&
                                                <h3 className="error"> { this.state.errorMessage.message } </h3> }
                                            </div>
                                        </div>
                                    </div>
                                    <div className="form-group">
                                        <button type="button" onClick={this.submitHandler} className="btn btn-primary send"><i className="fa fa-arrow-right"></i> Send Message</button>
                                    </div>
                                </form>
                        </div>
                    </div>
                    
                </div>
                <div className="col-2"></div>
            </div> */}
        </div>
    }
}

export default Message