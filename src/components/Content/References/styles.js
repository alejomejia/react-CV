import styled from "styled-components";
import THEME from "../../../config/theme";

export const Wrapper = styled.div``;

export const Title = styled.h3``;

export const Subtitle = styled.h4`
  color: ${THEME.palette.grey.dark};
  margin-bottom: 0;
`;

export const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(2, auto);
`;
