import React from "react";

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

export default PortfolioGrid;
