import React, { Component } from 'react';
import './style/Reference.sass';

class Reference extends Component{

  render(){

    return(
      <div className="reference">
        <p className="reference-name"><strong>{this.props.name}</strong></p>
        <p className="reference-phone"><a href={'tel:+57' + this.props.phone}>+57{this.props.phone}</a></p>
      </div>
    )
  }

}

export default Reference;