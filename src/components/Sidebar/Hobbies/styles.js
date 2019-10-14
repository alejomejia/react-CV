import styled from "styled-components";
import THEME from "../../../config/theme";

export const Wrapper = styled.div`
  width: 100%;
`;

export const Title = styled.h3``;

export const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(4, auto);
  gap: ${THEME.spacing(2)};
`;

export const Item = styled.div`
  justify-self: right;
  font-size: 1.875rem;

  @media (max-width: ${THEME.breakpoints.md}px) {
    justify-self: center;
  }
`;
