import React, { Component } from 'react';
import './style/Landing.sass';

import Header from '../components/Header';
import Sidebar from '../components/Sidebar/Sidebar';
import Content from '../components/Content/Content';

class Landing extends Component{

  render(){
    return(
      <section id="main-container">
        <Header />
        <section id="container">
          <Sidebar />
          <Content />
        </section>
      </section>
    )
  }

}

export default Landing;