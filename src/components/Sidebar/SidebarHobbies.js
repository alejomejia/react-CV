import React, { Component } from 'react';
import './style/SidebarHobbies.sass';

import Emoji from '../Emoji';

class SidebarHobbies extends Component{

  render(){
    return(
      <div className="sidebar-hobbies">
        <h3>{this.props.title}</h3>
        <div className="sidebar-hobbies--grid">
          <div className="sidebar-hobbies--grid-item">
            <Emoji icon="🎮" />
          </div>
          <div className="sidebar-hobbies--grid-item">
            <Emoji icon="🎬" />
          </div>
          <div className="sidebar-hobbies--grid-item">
            <Emoji icon="🍕" />
          </div>
          <div className="sidebar-hobbies--grid-item">
            <Emoji icon="🏍" />
          </div>
        </div>
      </div>
    )
  }

}

export default SidebarHobbies;