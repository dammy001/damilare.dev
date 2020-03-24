import React, { Component } from 'react';
import axios from 'axios';

class Business extends Component {
    constructor(props) {
        super(props)

        this.state = {
            business: ''
        }
    }

    componentDidMount() {
        axios.get('http://localhost:4000/api/business')
            .then(response => {
                console.log(response.data.message);
                this.setState({business: response.data.message})
            })
            .catch((error) => {
                console.log(error);
            })
    }

    render() {
        return <div>
            { this.state.business && <h3 className="error"> { this.state.business } </h3> }
        </div>
    }

}

export default Business