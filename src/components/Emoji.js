import React, { Component , Fragment } from 'react';

class Emoji extends Component{

  render(){
    return(
      <Fragment>
        <span className="icon" role="img" aria-label="envelope">️{this.props.icon}</span> 
      </Fragment>
    )
  }

}

export default Emoji;