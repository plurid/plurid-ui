import styled from 'styled-components';




export const StyledSlider = styled.div`
    display: flex;
    align-items: center;
    font-family: Ubuntu, 'Work Sans', -apple-system, BlinkMacSystemFont, Roboto,
        'Fira Sans', 'Droid Sans', 'Helvetica Neue', Helvetica, Arial, sans-serif;
`;


export const StyledSliderInputContainer: any = styled.div`
    width: ${(props: any) => {
        if (props.width) {
            return props.width + 'px';
        }
        return '100px';
    }};

    /*
        article: https://css-tricks.com/styling-cross-browser-compatible-range-inputs-css/
        tool: http://danielstern.ca/range.css/
    */
   input[type=range] {
        -webkit-appearance: none;
        width: 100%;
        margin: 6.5px 0;
        padding: 10px 0;
        background: transparent;
    }

    input[type=range]:focus {
        outline: none;
    }

    input[type=range]::-webkit-slider-runnable-track {
        width: 100%;
        height: 2px;
        cursor: pointer;
        background: ${(props: any) => props.theme.colorPrimary };
        border-radius: 0px;
    }

    input[type=range]::-webkit-slider-thumb {
        border: 2px solid ${(props: any) => props.theme.colorPrimary };
        height: 26px;
        width: 26px;
        border-radius: 50px;
        background: ${(props: any) => {
            if (props.hovered) {
                return props.theme.colorPrimary;
            }

            // return '#384158';
            return props.theme.backgroundColorTertiary;
        }};
        cursor: pointer;
        -webkit-appearance: none;
        margin-top: -13px;
    }

    input[type=range]:focus::-webkit-slider-runnable-track {
        background: ${(props: any) => props.theme.colorPrimary };
    }

    input[type=range]::-moz-range-track {
        width: 100%;
        height: 2px;
        cursor: pointer;
        background: ${(props: any) => props.theme.colorPrimary };
        border-radius: 0px;
    }

    input[type=range]::-moz-range-thumb {
        border: 2px solid ${(props: any) => props.theme.colorPrimary };
        height: 15px;
        width: 15px;
        border-radius: 50px;
        background: ${(props: any) => {
            if (props.hovered) {
                return props.theme.colorPrimary;
            }

            // return '#384158';
            return props.theme.backgroundColorTertiary;
        }};
        cursor: pointer;
    }

    input[type=range]::-ms-track {
        width: 100%;
        height: 2px;
        cursor: pointer;
        background: transparent;
        border-color: transparent;
        color: transparent;
    }

    input[type=range]::-ms-fill-lower {
        background: ${(props: any) => props.theme.colorPrimary };
        border-radius: 0px;
    }

    input[type=range]::-ms-fill-upper {
        background: ${(props: any) => props.theme.colorPrimary };
        border-radius: 0px;
    }

    input[type=range]::-ms-thumb {
        border: 2px solid ${(props: any) => props.theme.colorPrimary };
        height: 15px;
        width: 15px;
        border-radius: 50px;
        background: ${(props: any) => {
            if (props.hovered) {
                return props.theme.colorPrimary;
            }

            // return '#384158';
            return props.theme.backgroundColorTertiary;
        }};
        cursor: pointer;
        height: 2px;
    }

    input[type=range]:focus::-ms-fill-lower {
        background: ${(props: any) => props.theme.colorPrimary };
    }

    input[type=range]:focus::-ms-fill-upper {
        background: ${(props: any) => props.theme.colorPrimary };
    }
`;


export const StyledSliderValue = styled.div`
    user-select: none;
    font-size: 0.8rem;
    min-width: 1.6rem;
    text-align: right;
`;
