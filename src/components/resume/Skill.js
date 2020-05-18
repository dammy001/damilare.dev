import React, { Component } from 'react';
import data from "../data/resume"; 

class Skill extends Component {
  constructor(props){
    super(props)

    this.state = {
      skills: []
    }
  }
	render() {
    const skill = data.Skills.Skillset;
     if(skill){
        this.setState({skills: skill})
        console.log(this.state)
     } 
		return (
            <div>
            {
              data.Skills.map((skill, i) => {
                return (
                  <div key={i}>
                    <h4>{skill.Area}</h4>
                    <ul>
                      {
                        this.state.skills.map((skillDetail) => {
                          return (
                              <li>
                                {skillDetail.Name}
                              </li>
                          );
                        })
                      }
                    </ul>
                  </div>
                );
              })
            } 
          </div>
        );
    }
} 
export default Skill;
