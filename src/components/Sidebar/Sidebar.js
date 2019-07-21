import React, { Component } from 'react';
import './style/Sidebar.sass';

import SidebarContact from './SidebarContact';
import SidebarEducation from './SidebarEducation';
import SidebarSkills from './SidebarSkills';
import SidebarHobbies from './SidebarHobbies';


class Sidebar extends Component{

  render(){
    return(
      <aside id="sidebar">
        <div className="item">
          <SidebarContact title="Contact" />
        </div>
        <div className="item">
          <SidebarEducation title="Education" />
        </div>
        <div className="item">
          <SidebarSkills title="Skills" />
        </div>
        <div className="item no-right">
          <SidebarHobbies title="Hobbies" />
        </div>
      </aside>
    )
  }

}

export default Sidebar;