import React from "react";

import { Item, Title, Time } from "./styles";

const JobExperience = ({ title, link, company, time, children }) => {
  return (
    <Item>
      <Title>
        {title}{" "}
        <a href={link} target="_blank" rel="noopener noreferrer">
          @{company}
        </a>
      </Title>
      <Time>{time}</Time>
      {children}
    </Item>
  );
}

export default JobExperience;
