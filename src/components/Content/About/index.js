import React from "react";

import { Wrapper, Title } from "./styles";

const ContentAbout = ({ title }) => {
  const date = new Date();
  const currentYear = date.getFullYear();

  const yearOfMyFirstJob = 2013;
  const yearsOfExperience = currentYear - yearOfMyFirstJob;

  return (
    <Wrapper>
      <Title>{title}</Title>
      <p>
        I am a passionate UI.UX developer and web designer with{" "}
        {yearsOfExperience} years of experience in different digital agencies
        from my city. I like to learn all the time about new frontend
        technologies and learn new languages.
      </p>
      <p>
        In my free time, I like to play videogames, watch TV series and movies,
        and ride in my motorcycle .
      </p>
    </Wrapper>
  );
}

export default ContentAbout;
