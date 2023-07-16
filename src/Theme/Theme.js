import { createGlobalStyle } from "styled-components";

export const darkTheme = {
  bodyBg: "#303030",
  bodyText: "#dbdbdb",
  boxShadow: "5px 5px 20px #dbdbdb, -5px -5px 20px #dbdbdb",
};
export const lightTheme = {
  bodyBg: "#dbdbdb",
  bodyText: "#303030",
  boxShadow: "5px 5px 20px #303030, -5px -5px 20px #303030",
};
export const GlobalStyles = createGlobalStyle`
    body{
        background: ${(props) => props.theme.bodyBg};
        color: ${(props) => props.theme.bodyText};
    }
    .border-global-bottom-style{
        border-bottom: 5px solid ${(props) => props.theme.bodyText};
    }
    .border-global-style{
        border-radius: 10px;
        ont-family: 'Concert One', cursive;
        border: 2px solid ${(props) => props.theme.bodyText};
    }
    .border-global-style:hover{
        border: none;
        box-shadow: ${(props) => props.theme.boxShadow};
    }
    .project-details-div{
        background: ${(props) => props.theme.bodyBg};
        color: ${(props) => props.theme.bodyText};
    }
`;
