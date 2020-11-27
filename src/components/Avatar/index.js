import React from "react";

import { Wrapper, Figure, Image } from "./styles";

const Avatar = ({ image }) => {
  return (
    <Wrapper>
      <Figure>
        <Image src={image} alt="Avatar" />
      </Figure>
    </Wrapper>
  );
}

export default Avatar;
