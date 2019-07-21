import React, { Component } from 'react';
import './style/JobExperience.sass';

class JobExperience extends Component{

  render(){
    return(
      <div className="job-experience">
        <h4 className="job-experience--title">
          {this.props.title} <a 
            href={this.props.link} 
            target="_blank" 
            rel="noopener noreferrer">
            @{this.props.company}
          </a>
        </h4>
        <span className="job-experience--time">{this.props.time}</span>
        {this.props.children}
      </div>
    )
  }

}

export default JobExperience;