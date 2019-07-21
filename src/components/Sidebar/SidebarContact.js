import React, { Component } from 'react';
import './style/SidebarContact.sass';

import Emoji from '../Emoji';

class SidebarContact extends Component{

  render(){
    return(
      <div className="sidebar-contact">
        <h3>{this.props.title}</h3>
        <div className="sidebar-contact--item">
          <span className="text">
            <a href="mailto:alejomejiacuartas@outlook.com">alejomejiacuartas@outlook.com</a> 
          </span>
          <Emoji icon="✉️" />  
        </div>
        <div className="sidebar-contact--item">
          <span className="text">
            <a href="tel:+573192160752">+573192160752</a>
          </span>
          <Emoji icon="📱" />
        </div>
        <div className="sidebar-contact--item">
          <span className="text">Medellin, Colombia, South America</span>
          <Emoji icon="🌎" />
        </div>
      </div>
    )
  }

}

export default SidebarContact;