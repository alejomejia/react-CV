import React, { Component } from 'react';
import './style/SkillBar.sass';

class SkillBar extends Component{

  render(){

    const progressBar = {'width' : `${this.props.percentage}%`};
    
    return(
      <div className="skill-bar">
        <div className="skill-bar--label">
          {this.props.label} <span className="percentage">{this.props.percentage}%</span>
        </div>
        <div className="skill-bar--bar">
          <div className="skill-bar--bar-progress" style={progressBar}></div>
        </div>
      </div>
    )
  }

}

export default SkillBar;