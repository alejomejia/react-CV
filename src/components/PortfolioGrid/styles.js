import styled from "styled-components";
import THEME from "../../config/theme";

export const Item = styled.div``;

export const Head = styled.div`
  display: flex;
  margin-bottom: ${THEME.spacing(1)};
`;

export const Work = styled.h5`
  display: inline;
  margin: 0 ${THEME.spacing(0.5)} 0 0;
  background: ${THEME.palette.black.main};
  color: ${THEME.palette.white.light};
  padding: ${THEME.spacing(0.2)} ${THEME.spacing(0.4)};
  border-radius: 4px;
`;

export const Title = styled.h4`
  display: inline;
  margin: 0;
  font-weight: 700;
`;

export const Figure = styled.figure`
  display: block;
  margin: 0;
`;

export const Screenshot = styled.img`
  max-width: 100%;
  border-radius: 5px;
`;
