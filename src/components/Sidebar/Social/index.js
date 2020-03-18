import React from "react";

import SOCIALS from "./data.json";
import { Wrapper, Title, Grid, Item } from "./styles";

function SidebarSocial({ title }) {
  return (
    <Wrapper>
      <Title>{title}</Title>
      <Grid>
        {SOCIALS.map(social => (
          <Item key={social.id}>
            <span>
              <a href={social.link} target="_blank" rel="noopener noreferrer">
                <i className={`lni lni-${social.icon}`}></i>
              </a>
            </span>
          </Item>
        ))}
      </Grid>
    </Wrapper>
  );
}

export default SidebarSocial;
