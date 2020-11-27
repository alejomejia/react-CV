import React from "react";

import { Wrapper, Label, Percentage, Bar, Progress } from "./styles";

const SkillBar = ({ percentage, label }) => {
  return (
    <Wrapper>
      <Label>
        {label}
        <Percentage>{percentage}%</Percentage>
      </Label>
      <Bar>
        <Progress bar={percentage} />
      </Bar>
    </Wrapper>
  );
}

export default SkillBar;
