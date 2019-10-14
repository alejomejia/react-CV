import React from "react";

import { Wrapper, Title } from "./styles";

function ContentAbout({ title }) {
  return (
    <Wrapper>
      <Title>{title}</Title>
      <p>
        I am a passionate UI.UX developer and web designer with 6 years of
        experience in different digital agencies from my city. I like to learn
        all the time about new frontend technologies and learn new languages.
      </p>
      <p>
        In my free time, I like to play videogames, watch TV series and movies,
        and ride in my motorcycle .
      </p>
    </Wrapper>
  );
}

export default ContentAbout;
