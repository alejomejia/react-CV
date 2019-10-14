import React, { Component } from "react";
import "./style/SidebarSkills.sass";

import SkillBar from "../SkillBar";

class SidebarSkills extends Component {
  render() {
    return (
      <div className="sidebar-skills">
        <h3>{this.props.title}</h3>
        <h4 className="sidebar-skills--subtitle">Personal</h4>
        <ul className="sidebar-skills--list">
          <li className="list-item">Teamwork</li>
          <li className="list-item">Responsable</li>
          <li className="list-item">Committed</li>
          <li className="list-item">Eager to learn</li>
          <li className="list-item">Videogame nerd</li>
        </ul>
        <h4 className="sidebar-skills--subtitle">Languages</h4>
        <div className="sidebar-skills--bars margin">
          <ul className="sidebar-skills--list">
            <li className="list-item">Spanish</li>
          </ul>
          <SkillBar label="Writing" percentage="100" />
          <SkillBar label="Reading" percentage="100" />
          <SkillBar label="Talking" percentage="100" />
          <ul className="sidebar-skills--list">
            <li className="list-item">English - B2</li>
          </ul>
          <SkillBar label="Writing" percentage="80" />
          <SkillBar label="Reading" percentage="100" />
          <SkillBar label="Talking" percentage="80" />
        </div>
        <h4 className="sidebar-skills--subtitle">Professional</h4>
        <div className="sidebar-skills--bars professional">
          <SkillBar label="HTML5" percentage="90" />
          <SkillBar label="CSS3" percentage="85" />
          <SkillBar label="SASS" percentage="70" />
          <SkillBar label="ReactJS" percentage="50" />
          <SkillBar label="WordPress" percentage="90" />
          <SkillBar label="UX Design" percentage="80" />
          <SkillBar label="UI Design" percentage="90" />
          <SkillBar label="Adobe XD" percentage="95" />
          <SkillBar label="Illustrator" percentage="85" />
          <SkillBar label="Photoshop" percentage="40" />
        </div>
      </div>
    );
  }
}

export default SidebarSkills;
