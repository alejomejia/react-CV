import React from "react";

import SkillBar from "../../SkillBar";

import { Wrapper, Title, Subtitle, List, ListItem, Bars } from "./styles";

function SidebarSkills({ title }) {
  return (
    <Wrapper>
      <Title>{title}</Title>
      <Subtitle>Personal</Subtitle>
      <List>
        <ListItem>Teamwork</ListItem>
        <ListItem>Responsable</ListItem>
        <ListItem>Committed</ListItem>
        <ListItem>Eager to learn</ListItem>
        <ListItem>Videogame nerd</ListItem>
      </List>
      <Subtitle>Languages</Subtitle>
      <Bars className="margin">
        <List>
          <ListItem>Spanish</ListItem>
        </List>
        <SkillBar label="Writing" percentage="100" />
        <SkillBar label="Reading" percentage="100" />
        <SkillBar label="Talking" percentage="100" />
        <List>
          <ListItem>English - B2</ListItem>
        </List>
        <SkillBar label="Writing" percentage="80" />
        <SkillBar label="Reading" percentage="100" />
        <SkillBar label="Talking" percentage="80" />
      </Bars>
      <Subtitle>Professional</Subtitle>
      <Bars className="professional">
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
      </Bars>
    </Wrapper>
  );
}

export default SidebarSkills;
