import styled from "styled-components";
import THEME from "../../../config/theme";

export const Wrapper = styled.div`
  width: 100%;
`;

export const Title = styled.h3``;

export const Grid = styled.div`
  display: flex;
  justify-content: flex-end;

  @media (max-width: ${THEME.breakpoints.md}px) {
    justify-content: center;
  }
`;

export const Item = styled.div`
  justify-self: right;
  font-size: 1.875rem;
  margin: 0 ${THEME.spacing(1)};

  & a {
    display: inline-block;
    transform: translateY(0);
    transition: transform 0.15s ease-in-out;

    &:before {
      display: none;
    }

    &:hover {
      transform: translateY(-5px);
    }
  }
`;
