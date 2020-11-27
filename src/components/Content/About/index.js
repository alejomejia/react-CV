import React from 'react';
import PropTypes from 'prop-types';

import { Wrapper, Title } from './styles';

const ContentAbout = ({ title }) => {
  const date = new Date();
  const currentYear = date.getFullYear();

  const yearOfMyFirstJob = 2013;
  const yearsOfExperience = currentYear - yearOfMyFirstJob;

  return (
    <Wrapper>
      <Title>{title}</Title>
      <p>
        I am a passionate UX.UI developer and web designer with{' '}
        {yearsOfExperience} years of experience in different digital agencies
        and software companies. I like to learn all the time about new frontend
        technologies and UI trends.
      </p>
      <p>
        In my free time, I like to play videogames, watch TV series and movies,
        travel and ride in my motorcycle.
      </p>
    </Wrapper>
  );
};

ContentAbout.propTypes = {
  title: PropTypes.string.isRequired,
};

export default ContentAbout;
