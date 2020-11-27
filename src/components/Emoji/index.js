import React from "react";
import PropTypes from 'prop-types';

import { Icon } from "./styles";

const Emoji = ({ label, icon }) => {
  return (
    <Icon role="img" aria-label={label}>
      ️{icon}
    </Icon>
  );
}

Emoji.propTypes = {
  label: PropTypes.string,
  icon: PropTypes.string.isRequired
}

export default Emoji;
