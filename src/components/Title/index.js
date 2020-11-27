import React from 'react';
import PropTypes from 'prop-types';

import { Wrapper, NameWrapper, Name, JobWrapper, Job } from './styles';

const Title = ({ name, jobTitle }) => {
  return (
    <Wrapper>
      <NameWrapper>
        <Name>{name}</Name>
      </NameWrapper>
      <JobWrapper>
        <Job>{jobTitle}</Job>
      </JobWrapper>
    </Wrapper>
  );
};

Title.propTypes = {
  name: PropTypes.string.isRequired,
  jobTitle: PropTypes.string.isRequired,
};

export default Title;
