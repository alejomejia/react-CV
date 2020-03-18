import styled from "styled-components";
import THEME from "../../config/theme";

export const MainContainer = styled.section`
  background: ${THEME.palette.white.main};
  margin: ${THEME.spacing(5)} auto;
  max-width: 1200px;
  border-radius: 4px;
  padding-bottom: ${THEME.spacing(5)};
  box-shadow: 0 0 20px 1px rgba(0, 0, 0, 0.1);

  @media (max-width: ${THEME.breakpoints.lg}px) {
    margin: ${THEME.spacing(3)};
  }

  @media (max-width: ${THEME.breakpoints.md}px) {
    padding-bottom: 0;
  }

  @media (max-width: ${THEME.breakpoints.xs}px) {
    margin: ${THEME.spacing(1.5)};
  }
`;

export const Container = styled.section`
  display: grid;
  grid-template-columns: 35% 65%;

  @media (max-width: ${THEME.breakpoints.md}px) {
    grid-template-columns: 100%;
  }

  & h3 {
    font-family: ${THEME.typography.primary};
    text-transform: uppercase;
    margin-top: 0;
    margin-bottom: ${THEME.spacing(2.5)};
  }

  & p {
    font-size: 1rem;
  }
`;
