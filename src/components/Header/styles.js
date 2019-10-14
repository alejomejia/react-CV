import styled from "styled-components";
import THEME from "../../config/theme";

export const Head = styled.header`
  display: grid;
  grid-template-columns: 35% 65%;
  column-gap: ${THEME.spacing(5)};
  align-items: center;
  padding: ${THEME.spacing(7)} 0;

  @media (max-width: ${THEME.breakpoints.md}px) {
    padding: ${THEME.spacing(4)} 0 0;
  }

  @media (max-width: ${THEME.breakpoints.sm}px) {
    grid-template-columns: 100%;
    padding: ${THEME.spacing(4)} 0 ${THEME.spacing(0.5)};
  }
`;
