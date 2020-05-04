import React from 'react';
import { Button } from 'react-bootstrap'

const ButtonClass = () => {
    return (
        <div className="btn-group">
            <Button type="button" className="btn btn-primary btn-lg getstarted">My Work</Button>
            <Button type="button" className="btn btn-light btn-lg learn">My Resume</Button>
        </div>
    )
}

export default ButtonClass