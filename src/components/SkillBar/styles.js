import styled from "styled-components";
import THEME from "../../config/theme";

export const Wrapper = styled.div`
  width: 200px;
  margin-left: auto;
  margin-bottom: ${THEME.spacing(0.5)};

  @media (max-width: ${THEME.breakpoints.md}px) {
    margin: 0 auto ${THEME.spacing(0.5)} auto;
  }
`;

export const Label = styled.div`
  font-size: 0.875rem;

  @media (max-width: ${THEME.breakpoints.md}px) {
    display: flex;
    justify-content: space-between;
    align-items: baseline;
  }
`;

export const Percentage = styled.span`
  color: ${THEME.palette.white.light};
  background: ${THEME.palette.black.main};
  margin-left: ${THEME.spacing(0.5)};
  padding: ${THEME.spacing(0.2)} ${THEME.spacing(0.4)};
  border-radius: 4px;
`;

export const Bar = styled.div`
  display: inline-block;
  position: relative;
  width: 200px;
  max-width: 200px;
  height: 9px;
  border: 2px solid ${THEME.palette.primary.darker};
  border-radius: 5px;
`;

export const Progress = styled.div`
  position: absolute;
  top: 0;
  bottom: 0;
  right: 0;
  width: ${props => props.bar}%;
  background-color: ${THEME.palette.primary.main};
  border-radius: 5px;
`;
