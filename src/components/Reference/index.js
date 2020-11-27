import React from 'react';
import PropTypes from 'prop-types';

import { Wrapper, Name, Phone } from './styles';

const Reference = ({ name, phone }) => {
  return (
    <Wrapper>
      <Name>
        <strong>{name}</strong>
      </Name>
      <Phone>
        <a href={'tel:+57' + phone}>+57{phone}</a>
      </Phone>
    </Wrapper>
  );
};

Reference.propTypes = {
  name: PropTypes.string.isRequired,
  phone: PropTypes.string.isRequired,
};

export default Reference;
