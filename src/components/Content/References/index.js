import React from "react";

import Reference from "../../Reference";

import { Wrapper, Title, Subtitle, Grid } from "./styles";

function ContentReferences({ title }) {
  return (
    <Wrapper>
      <Title>{title}</Title>
      <Subtitle>Personal</Subtitle>
      <Grid>
        <Reference name="Catalina Rivera" phone="3008859899" />
        <Reference name="Melisa Estrada" phone="3229016600" />
      </Grid>
      <Subtitle>Work</Subtitle>
      <Grid>
        <Reference name="Melisa Rave" phone="3194474116" />
        <Reference name="Jorge Madrigal" phone="3146208406" />
      </Grid>
    </Wrapper>
  );
}

export default ContentReferences;
