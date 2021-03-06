import React, { Fragment } from 'react';
import PropTypes from 'prop-types';

import SkillBar from '../../SkillBar';

import INFO from './data.json';
import { Wrapper, Title, Subtitle, List, ListItem, Bars } from './styles';

const SidebarSkills = ({ title }) => {
  return (
    <Wrapper>
      <Title>{title}</Title>
      <Subtitle>Personal</Subtitle>
      <List>
        {INFO.personal.map((item) => (
          <ListItem key={item.id}>{item.text}</ListItem>
        ))}
      </List>
      <Subtitle>Languages</Subtitle>
      <Bars className="margin">
        {INFO.languages.map((item) => (
          <Fragment key={item.id}>
            <List>
              <ListItem>{item.lang}</ListItem>
            </List>
            {item.skills &&
              item.skills.map((skill) => (
                <Fragment key={skill.id}>
                  <SkillBar label={skill.label} percentage={skill.percentage} />
                </Fragment>
              ))}
          </Fragment>
        ))}
      </Bars>
      <Subtitle>Professional</Subtitle>
      <Bars className="professional">
        {INFO.professional.map((item) => (
          <Fragment key={item.id}>
            <SkillBar label={item.label} percentage={item.percentage} />
          </Fragment>
        ))}
      </Bars>
    </Wrapper>
  );
};

SidebarSkills.propTypes = {
  title: PropTypes.string.isRequired,
};

export default SidebarSkills;
