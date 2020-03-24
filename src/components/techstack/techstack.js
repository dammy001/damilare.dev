import React from 'react';
import './teckstack.scss';
import react from './logo-react.svg';
import laravel from './laravel.png';
import angular from './angular.svg';
import node from './node.png';
import sass from './sass.png';
import mysql from './mysql.svg';
import bootstrap from './bootstrap.png';
import js from './logo-js.svg';

class Techstack extends React.Component {
    constructor(props){
        super(props)
        this.state = {
            alt: "tech stack"
        }
    }
    render(){
        const { alt } = this.state;
        return <div className="stack">
                            <div className="svg">
                                <img src={react} alt={alt}/>
                                <img src={bootstrap} alt={alt}/>
                                <img src={js} alt={alt}/>
                                <img src={angular} alt={alt}/>
                                <img src={sass} alt={alt}/>
                                <img src={node} alt={alt}/>
                                <img src={laravel} alt={alt}/>
                                <img src={mysql} alt={alt}/> 
                            </div>
                            
                       
        </div>
        
    }
}

export default Techstack