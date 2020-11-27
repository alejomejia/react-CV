import React from "react";

import { Wrapper, Name, Phone } from "./styles";

const Reference = ({ name, phone }) => {
  return (
    <Wrapper>
      <Name>
        <strong>{name}</strong>
      </Name>
      <Phone>
        <a href={"tel:+57" + phone}>+57{phone}</a>
      </Phone>
    </Wrapper>
  );
}

export default Reference;
