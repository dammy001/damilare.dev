import React, { Component } from 'react';
import data from '../data/resume'

class Experience extends Component {
    render() {
        return (
            <div>
            {
                data.Experiences.map((experience, i) => {
                    return (
                        <div key={i}>
                            <div>
                                <div>
                                    <div>
                                        <a href={experience.url}> {experience.companyName} </a>
                                    </div>
                                        { experience.roles.map((role, i) => { 
                                            return <div key={i}>
                                                <h5>{role.title}</h5>
                                                <span>{role.startDate} - {role.endDate} </span><br></br>
                                                <span>{role.type}</span><br></br>
                                                <span>{role.location}</span>
                                                <p className="ex_des">{role.description}</p>
                                            </div>
                                        }) }
                                        
                                        <ul>
                                            { experience.impacts.map(impact => (<li>{impact}</li>)) }
                                        </ul>         
                                </div>
                            </div>
                        </div>
                    );
                })
            }
            </div>
        );
    }
}

export default Experience;

