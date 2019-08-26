import React, { Component } from 'react';
import './style/Header.sass';

import IMAGE from '../images/avatar.jpg';
import Avatar from '../components/Avatar';
import Title from '../components/Title';

class Header extends Component{
  render(){
    return(
      <header id="main-header">
        <Avatar image={IMAGE} />
        <Title 
          name="Alejandro Mejía" 
          jobTitle="UX-UI Developer . Web Designer" 
        />
      </header>
    )
  }

}

export default Header;