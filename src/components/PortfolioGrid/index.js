import React from 'react';
import PropTypes from 'prop-types';

import {
  Item,
  Head,
  Work,
  Title,
  Figure,
  Screenshot,
  Icon,
  Link,
} from './styles';

const PortfolioGrid = ({ work, title, cover, link }) => {
  const renderScreenshot = (link) => {
    if (link) {
      return (
        <Link href={link} target="_blank">
          <Screenshot src={cover} alt="Portfolio item" />
          <Icon className="lni lni-link"></Icon>
        </Link>
      );
    } else {
      return (
        <>
          <Screenshot src={cover} alt="Portfolio item" />
        </>
      );
    }
  };

  return (
    <Item>
      <Head>
        <Work>{work}</Work>
        <Title>{title}</Title>
      </Head>
      <Figure>{renderScreenshot(link)}</Figure>
    </Item>
  );
};

PortfolioGrid.propTypes = {
  work: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  cover: PropTypes.string.isRequired,
  link: PropTypes.string,
};

export default PortfolioGrid;
