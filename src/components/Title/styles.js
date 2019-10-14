import styled from "styled-components";
import THEME from "../../config/theme";

export const Wrapper = styled.div``;

export const NameWrapper = styled.div``;

export const Name = styled.h1`
  font-family: ${THEME.typography.primary};
  text-transform: uppercase;
  margin: 0;
  font-size: 3.25rem;
  font-weight: 700;
  color: ${THEME.palette.primary.main};

  @media (max-width: ${THEME.breakpoints.md}px) {
    font-size: 2.5rem;
  }

  @media (max-width: ${THEME.breakpoints.sm}px) {
    text-align: center;
  }

  @media (max-width: ${THEME.breakpoints.xs}px) {
    font-size: 1.625rem;
  }
`;

export const JobWrapper = styled.div``;

export const Job = styled.h2`
  font-family: ${THEME.typography.primary};
  text-transform: uppercase;
  margin: 0;
  font-size: 1.5rem;
  font-weight: 400;
  letter-spacing: 2.5px;

  @media (max-width: ${THEME.breakpoints.md}px) {
    font-size: 1.25rem;
    letter-spacing: 1.5px;
  }

  @media (max-width: ${THEME.breakpoints.sm}px) {
    text-align: center;
  }

  @media (max-width: ${THEME.breakpoints.xs}px) {
    font-size: 0.938rem;
    letter-spacing: 0;
  }
`;
