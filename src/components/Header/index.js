import React from 'react';

import Avatar from '../Avatar';
import Title from '../Title';

import { Head } from './styles';

import IMAGE from '../../images/avatar.jpg';

const Header = () => {
  return (
    <Head id="main-header">
      <Avatar image={IMAGE} />
      <Title name="Alejandro Mejía" jobTitle="UX.UI Designer / Developer" />
    </Head>
  );
};

export default Header;
