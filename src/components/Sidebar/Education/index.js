import React from "react";

import { Wrapper, Title, Item, Subtitle, Description } from "./styles";

import EDUCATION from "./data.json";
import { getEducationLink } from "../../../config/const";

function SidebarEducation({ title }) {
  return (
    <Wrapper>
      <Title>{title}</Title>
      {EDUCATION.map(item => (
        <Item key={item.id}>
          <Subtitle>
            {item.title} {getEducationLink(item.name, item.url)}
          </Subtitle>
          <Description>{item.description}</Description>
        </Item>
      ))}
    </Wrapper>
  );
}

export default SidebarEducation;
