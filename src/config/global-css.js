import { createGlobalStyle } from "styled-components";
import THEME from "./theme";

const GlobalCSS = createGlobalStyle`

    *, 
    *::before, 
    *::after{
        box-sizing: border-box;
    }

    body,
    html,
    #root{
        margin: 0;
        height: 100%;
        overflow-x: hidden;
    }

    body{
        background: ${THEME.palette.white.light};
        position: relative;
        color: ${THEME.typography.color};
        font-family: ${THEME.typography.secondary};

        &:after{
            content: '';
            width: 100%;
            height: 300px;
            position: absolute;
            top: 0;
            background: ${THEME.palette.primary.main};
            background-image: ${THEME.palette.primary.gradient};
        }
    }

    #root{
        position: relative;
        z-index: 10;
    }

    a{
        position: relative;
        color: ${THEME.palette.primary.main};
        text-decoration: none;
        z-index: 5;

        &:before{
            content: '';
            position: absolute;
            top: 0;
            right: 0;
            left: 0;
            bottom: 0;
            width: 0%;
            z-index: -1;
            transition: all .35s ease;
            background: yellow;
        }

        &:hover{
            color: ${THEME.palette.primary.main};
            text-decoration: none;

            &:before{
                width: 100%;
            }
        }
    }
`;

export default GlobalCSS;
