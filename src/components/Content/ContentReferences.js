import React, { Component } from 'react';
import './style/ContentReferences.sass';

import Reference from '../Reference';

class ContentReferences extends Component{

  render(){
    return(
      <div className="references">
        <h3>{this.props.title}</h3>
        <h4 className="references--title">Personal</h4>
        <div className="references--grid">
          <Reference name="Catalina Rivera" phone="3008859899" />
          <Reference name="Melisa Estrada" phone="3229016600" />
        </div>
        <h4 className="references--title">Work</h4>
        <div className="references--grid">
          <Reference name="Melisa Rave" phone="3194474116" />
          <Reference name="Jorge Madrigal" phone="3146208406" />
        </div>
      </div>
    )
  }

}

export default ContentReferences;