import React from 'react';
import PropTypes from 'prop-types';

import { Wrapper, Label, Percentage, Bar, Progress } from './styles';

const SkillBar = ({ percentage, label }) => {
  return (
    <Wrapper>
      <Label>
        {label}
        <Percentage>{percentage}%</Percentage>
      </Label>
      <Bar>
        <Progress bar={percentage} />
      </Bar>
    </Wrapper>
  );
};

SkillBar.propTypes = {
  percentage: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
};

export default SkillBar;
