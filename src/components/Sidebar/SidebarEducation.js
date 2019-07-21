import React, { Component } from 'react';
import './style/SidebarEducation.sass';

class SidebarEducation extends Component{

  render(){
    
    const PLATZI = <a href="https://platzi.com" target="_blank" rel="noopener noreferrer">@Platzi</a>
    const SENA = <a href="http://www.sena.edu.co" target="_blank" rel="noopener noreferrer">@Sena</a>
    const ADOBE = <a href="https://www.adobe.com" target="_blank" rel="noopener noreferrer">@Adobe</a>

    return(
      <div className="sidebar-education">
        <h3>{this.props.title}</h3>
        <div className="sidebar-education--item">
          <h4 className="sidebar-education--item-title">Git and GitHub Certificate {PLATZI}</h4>
          <p className="sidebar-education--item-description">Certification for take the Git and GitHub professional course from Platzi</p>
        </div>
        <div className="sidebar-education--item">
          <h4 className="sidebar-education--item-title">User Experience & User Interface Design {PLATZI}</h4>
          <p className="sidebar-education--item-description">Certification for take User Experience and User Interface Design from Platzi</p>
        </div>
        <div className="sidebar-education--item">
          <h4 className="sidebar-education--item-title">Multimedia Production Technology {SENA}</h4>
          <p className="sidebar-education--item-description">A nicely complete technology, I've learned from graphic design and illustration to web development using HTML5, CSS3 and JavaScript</p>
        </div>
        <div className="sidebar-education--item">
          <h4 className="sidebar-education--item-title">Photoshop & Flash CS5 Certificate {ADOBE}</h4>
          <p className="sidebar-education--item-description">Certification for take Photoshop and Flash CS5 presencial evaluation from Adobe</p>
        </div>
      </div>
    )
  }

}

export default SidebarEducation;