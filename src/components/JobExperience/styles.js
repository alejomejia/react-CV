import styled from "styled-components";
import THEME from "../../config/theme";

export const Item = styled.div`
  padding-bottom: ${THEME.spacing(3)};
  margin-bottom: ${THEME.spacing(3)};
  border-bottom: 2px solid #dedede;

  &:last-child {
    border-bottom: 0;
    margin-bottom: 0;
    padding-bottom: 0;
  }
`;

export const Title = styled.h4`
  color: ${THEME.palette.grey.dark};
  margin-bottom: ${THEME.spacing(0.5)};
`;

export const Time = styled.span`
  color: ${THEME.palette.grey.main};
`;
