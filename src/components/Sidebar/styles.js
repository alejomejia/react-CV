import styled from "styled-components";
import THEME from "../../config/theme";

export const Aside = styled.aside`
  padding: ${THEME.spacing(3)};
  text-align: right;

  @media (max-width: ${THEME.breakpoints.md}px) {
    text-align: center;
  }
`;

export const Item = styled.div`
  position: relative;
  display: flex;
  justify-content: flex-end;
  margin-bottom: ${THEME.spacing(5)};
  border-bottom: 2px solid #dedede;
  padding-bottom: ${THEME.spacing(5)};

  &:last-child {
    border-bottom: 0;
    margin-bottom: 0;
    padding-bottom: 0;
  }

  &.no-right {
    justify-content: inherit;

    & h3 {
      text-align: right;

      @media (max-width: ${THEME.breakpoints.md}px) {
        text-align: center;
      }
    }

    @media (max-width: ${THEME.breakpoints.md}px) {
      justify-content: center;
    }
  }

  @media (max-width: ${THEME.breakpoints.md}px) {
    justify-content: center;
    margin-bottom: ${THEME.spacing(3)};
    padding-bottom: ${THEME.spacing(3)};

    &:first-child {
      border-top: 2px solid #dedede;
      padding-top: ${THEME.spacing(3)};
    }
  }
`;
