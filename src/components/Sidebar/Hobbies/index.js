import React from "react";

import Emoji from "../../Emoji";

import { Wrapper, Title, Grid, Item } from "./styles";

function SidebarHobbies({ title }) {
  return (
    <Wrapper>
      <Title>{title}</Title>
      <Grid>
        <Item>
          <Emoji icon="🎮" />
        </Item>
        <Item>
          <Emoji icon="🎬" />
        </Item>
        <Item>
          <Emoji icon="🍕" />
        </Item>
        <Item>
          <Emoji icon="🏍" />
        </Item>
      </Grid>
    </Wrapper>
  );
}

export default SidebarHobbies;
