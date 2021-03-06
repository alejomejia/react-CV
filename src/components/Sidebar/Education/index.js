import React from 'react';
import PropTypes from 'prop-types';

import { Wrapper, Title, Item, Subtitle, Description } from './styles';

import EDUCATION from './data.json';
import { getEducationLink } from '../../../config/const';

const SidebarEducation = ({ title }) => {
  return (
    <Wrapper>
      <Title>{title}</Title>
      {EDUCATION.map((item) => (
        <Item key={item.id}>
          <Subtitle>
            {item.title} {getEducationLink(item.name, item.url)}
          </Subtitle>
          <Description>{item.description}</Description>
        </Item>
      ))}
    </Wrapper>
  );
};

SidebarEducation.propTypes = {
  title: PropTypes.string.isRequired,
};

export default SidebarEducation;
