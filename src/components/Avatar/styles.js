import styled from "styled-components";
import THEME from "../../config/theme";

export const Wrapper = styled.div`
  display: flex;
  justify-content: center;
`;

export const Figure = styled.figure`
  margin: 0;
`;

export const Image = styled.img`
  max-width: 200px;
  height: auto;
  border-radius: 50%;

  @media (max-width: ${THEME.breakpoints.md}px) {
    max-width: 150px;
  }

  @media (max-width: ${THEME.breakpoints.xs}px) {
    max-width: 120px;
  }
`;
