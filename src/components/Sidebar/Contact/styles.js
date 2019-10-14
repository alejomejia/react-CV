import styled from "styled-components";
import THEME from "../../../config/theme";

export const Wrapper = styled.div``;

export const Title = styled.h3``;

export const Item = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  margin-bottom: ${THEME.spacing(0.5)};

  @media (max-width: ${THEME.breakpoints.md}px) {
    justify-content: center;
  }
`;

export const Text = styled.span``;

/*

    .icon
      width: 21px
      margin-left: 10px

      svg
        display: block
        margin: 0 auto

*/
