import React from "react";
import PropTypes from 'prop-types';

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

JobExperience.propTypes = {
  title: PropTypes.string.isRequired,
  link: PropTypes.string.isRequired,
  company: PropTypes.string.isRequired,
  time: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired
}

export default JobExperience;
