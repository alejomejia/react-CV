import styled from "styled-components";
import THEME from "../../../config/theme";

export const Wrapper = styled.div`
  width: 100%;
`;

export const Title = styled.h3``;

export const Subtitle = styled.h4`
  color: ${THEME.palette.secondary.main};
`;

export const List = styled.ul`
  direction: rtl;
  padding-right: ${THEME.spacing(2)};

  @media (max-width: ${THEME.breakpoints.md}px) {
    padding-right: 0;
    list-style-type: none;
  }
`;

export const ListItem = styled.li`
  margin-bottom: ${THEME.spacing(0.2)};
`;

export const Bars = styled.div`
  &.margin {
    margin: ${THEME.spacing(3)} 0;
  }

  &.professional {
    @media (max-width: ${THEME.breakpoints.md}px) {
      display: grid;
      grid-template-columns: repeat(2, 50%);
    }

    @media (max-width: ${THEME.breakpoints.xs}px) {
      grid-template-columns: 100%;
    }
  }
`;
