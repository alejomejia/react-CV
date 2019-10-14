import styled from "styled-components";
import THEME from "../../config/theme";

export const Main = styled.main`
  background: ${THEME.palette.white.lighter};
  padding: ${THEME.spacing(3)};
  border-radius: 5px 0 0 5px;

  @media (max-width: ${THEME.breakpoints.md}px) {
    border-radius: 0 0 4px 4px;
  }
`;

export const Item = styled.div`
  margin-bottom: ${THEME.spacing(5)};

  &:last-child {
    margin-bottom: 0;
  }

  p:last-child {
    margin-bottom: 0;
  }
`;
