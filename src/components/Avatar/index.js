import React from "react";
import PropTypes from 'prop-types';

import { Wrapper, Figure, Image } from "./styles";

const Avatar = ({ image }) => {
  return (
    <Wrapper>
      <Figure>
        <Image src={image} alt="Avatar" />
      </Figure>
    </Wrapper>
  );
}

Avatar.propTypes = {
  image: PropTypes.string.isRequired
}

export default Avatar;
