import theme from "../global/theme";
import { mediaQueries } from "../../utils/mediaQuery";
import styled, { createGlobalStyle } from "styled-components";
export const GlobalStyle = createGlobalStyle`
    body {
        padding: 0;
        margin:0;
        box-sizing: border-box;
        font-weight: 400;
        height: 100%;
        font-size: 14px;
        line-height: 1.5;
        display: flex;
        min-height: 100vh;
        flex-direction: column;
        overflow-x: hidden;
        text-rendering: optimizeLegibility;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        appearance: auto;
        -moz-appearance: auto;
        -webkit-appearance: auto;
        font-family: ${theme.font.fontFamilyMontserrat};
    }
    h1,
    h2,
    h3,
    h4,
    h5,
    h6,
    p,
    a,
    ul{
        margin: 0;
        padding: 0;
        line-height: normal;
        list-style-type: none;
        text-decoration: none !important;
    }
    a{
        transition: all 0.3s ease-in-out;
        &:hover{
		    opacity: 0.8;
	    }
    } 
`;