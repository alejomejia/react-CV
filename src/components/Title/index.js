import React from "react";

import { Wrapper, NameWrapper, Name, JobWrapper, Job } from "./styles";

const Title = ({ name, jobTitle }) => {
  return (
    <Wrapper>
      <NameWrapper>
        <Name>{name}</Name>
      </NameWrapper>
      <JobWrapper>
        <Job>{jobTitle}</Job>
      </JobWrapper>
    </Wrapper>
  );
}

export default Title;
