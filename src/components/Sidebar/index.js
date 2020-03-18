import React from "react";

import SidebarContact from "./Contact";
import SidebarEducation from "./Education";
import SidebarSkills from "./Skills";
import SidebarHobbies from "./Hobbies";
import SidebarSocial from "./Social";

import { Aside, Item } from "./styles";

function Sidebar() {
  return (
    <Aside id="sidebar">
      <Item>
        <SidebarContact title="Contact" />
      </Item>
      <Item>
        <SidebarEducation title="Education" />
      </Item>
      <Item>
        <SidebarSkills title="Skills" />
      </Item>
      <Item className="no-right">
        <SidebarHobbies title="Hobbies" />
      </Item>
      <Item>
        <SidebarSocial title="Social" />
      </Item>
    </Aside>
  );
}

export default Sidebar;
