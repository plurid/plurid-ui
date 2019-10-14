import { createGlobalStyle } from 'styled-components';

import {
    fontFamilySansSerif,
} from '../../data/constants';



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
        font-family: ${fontFamilySansSerif};
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;

        color: ${(props: any) => {
            if (props.dark) {
                return props.theme.backgroundColorBright;
            }
            return props.theme.colorPrimary;
        }};
        background: ${(props: any) => {
            if (props.dark) {
                return props.theme.backgroundColorDark;
            }
            return props.theme.backgroundColorPrimary;
        }};
    }
`;


export default GlobalStyles;
