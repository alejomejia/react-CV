import React from "react";

import { Item, Head, Work, Title, Figure, Screenshot } from "./styles";

function PortfolioGrid({ work, title, screenshot }) {
  return (
    <Item>
      <Head>
        <Work>{work}</Work>
        <Title>{title}</Title>
      </Head>
      <Figure>
        <Screenshot src={screenshot} alt="Portfolio item" />
      </Figure>
    </Item>
  );
}

export default PortfolioGrid;
