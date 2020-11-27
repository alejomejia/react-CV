import React from 'react';
import PropTypes from 'prop-types';

import Emoji from '../../Emoji';

import HOBBIES from './data.json';
import { Wrapper, Title, Grid, Item } from './styles';

const SidebarHobbies = ({ title }) => {
  return (
    <Wrapper>
      <Title>{title}</Title>
      <Grid>
        {HOBBIES.map((hobbie) => (
          <Item key={hobbie.id}>
            <Emoji icon={hobbie.icon} />
          </Item>
        ))}
      </Grid>
    </Wrapper>
  );
};

SidebarHobbies.propTypes = {
  title: PropTypes.string.isRequired,
};

export default SidebarHobbies;
