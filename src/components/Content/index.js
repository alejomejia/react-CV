import React from "react";

import ContentAbout from "./About";
import ContentExperience from "./Experience";
import ContentPortfolio from "./Portfolio";
import ContentReferences from "./References";

import { Main, Item } from "./styles";

function Content() {
  return (
    <Main id="content">
      <Item>
        <ContentAbout title="About me" />
      </Item>
      <Item>
        <ContentExperience title="Experience" />
      </Item>
      <Item>
        <ContentPortfolio title="Portfolio" />
      </Item>
      <Item>
        <ContentReferences title="References" />
      </Item>
    </Main>
  );
}

export default Content;
