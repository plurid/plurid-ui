import { createGlobalStyle } from 'styled-components';



const GlobalStyles = createGlobalStyle`
    *, *::after, *::before {
        box-sizing: border-box;
    }

    html {
        height: 100%;
        min-height: 100vh;
    }

    body {
        height: 100%;
        margin: 0;
        padding: 0;
        font-family: Ubuntu, 'Work Sans', -apple-system, BlinkMacSystemFont, Roboto,
            'Fira Sans', 'Droid Sans', 'Helvetica Neue', Helvetica, Arial, sans-serif;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;

        color: ${(props: any) => {
            return props.theme.colorPrimary;
        }};
        background: ${(props: any) => {
            return props.theme.backgroundColorPrimary;
        }};
    }
`;


export default GlobalStyles;
