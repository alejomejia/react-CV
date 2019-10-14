import React, { Component } from 'react';
import './style/Title.sass';

class Title extends Component{
  render(){
    return(
      <div className="cv-title">
        <div className="cv-title--name">
          <h1>{this.props.name}</h1>
        </div>
        <div className="cv-title--job-title">
          <h2>{this.props.jobTitle}</h2>
        </div>
      </div>
    )
  }

}

export default Title;