import styled from "styled-components";
import THEME from "../../../config/theme";

export const Wrapper = styled.div``;

export const Title = styled.h3``;

export const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(2, calc(50% - ${THEME.spacing(1)}));
  grid-gap: ${THEME.spacing(2)};

  @media (max-width: ${THEME.breakpoints.xs}px) {
    grid-template-columns: 100%;
  }
`;
