import React from "react";
import PropTypes from 'prop-types';

import { Item, Head, Work, Title, Figure, Screenshot } from "./styles";

const PortfolioGrid = ({ work, title, cover }) => {
  return (
    <Item>
      <Head>
        <Work>{work}</Work>
        <Title>{title}</Title>
      </Head>
      <Figure>
        <Screenshot src={cover} alt="Portfolio item" />
      </Figure>
    </Item>
  );
}

PortfolioGrid.propTypes = {
  work: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  cover: PropTypes.string.isRequired
}

export default PortfolioGrid;
