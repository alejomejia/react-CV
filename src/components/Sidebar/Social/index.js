import React from 'react';
import PropTypes from 'prop-types';

import SOCIALS from './data.json';
import { Wrapper, Title, Grid, Item } from './styles';

const SidebarSocial = ({ title }) => {
  return (
    <Wrapper>
      <Title>{title}</Title>
      <Grid>
        {SOCIALS.map((social) => (
          <Item key={social.id}>
            <span>
              <a href={social.link} target="_blank" rel="noopener noreferrer">
                <i className={`lni lni-${social.icon}`}></i>
              </a>
            </span>
          </Item>
        ))}
      </Grid>
    </Wrapper>
  );
};

SidebarSocial.propTypes = {
  title: PropTypes.string.isRequired,
};

export default SidebarSocial;
