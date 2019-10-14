import React, { Component } from 'react';
import './style/Avatar.sass';

class Avatar extends Component{
  render(){
    return(
      <div className="cv-picture">
        <figure className="cv-picture--wrapper">
          <img 
            className="cv-picture--avatar" 
            src={this.props.image} 
            alt="Avatar" 
          />
        </figure>
      </div>
    )
  }

}

export default Avatar;