import styled from 'styled-components';

import {
    fontFamilySansSerif,
} from '../../../data/constants';



export const StyledPureButton: any = styled.button`
    color: ${(props: any) => {
        return props.theme.colorPrimary;
    }};
    background-color: ${(props: any) => {
        switch (props.level) {
            case 0:
                return props.theme.backgroundColorPrimary;
            case 1:
                return props.theme.backgroundColorSecondary;
            case 2:
                return props.theme.backgroundColorTertiary;
            case 3:
                return props.theme.backgroundColorQuaternary;
            default:
                return props.theme.backgroundColorPrimary;
        }
    }};
    box-shadow: 0px 8px 8px 0px ${(props: any) => {
        return props.theme.boxShadowUmbraColor;
    }};

    box-sizing: border-box;
    display: block;
    width: 100%;
    min-width: ${(props: any) => {
        switch (props.size) {
            case 'small':
                return '8rem';
            case 'normal':
                return '10rem';
            case 'large':
                return '12rem';
            default:
                return '10rem';
        }
    }};
    border-radius: ${(props: any) => {
        switch (props.size) {
            case 'small':
                return '1rem';
            case 'normal':
                return '1.2rem';
            case 'large':
                return '1.4rem';
            default:
                return '1.2rem';
        }
    }};
    padding: ${(props: any) => {
        switch (props.size) {
            case 'small':
                return '0 1.2rem';
            case 'normal':
                return '0 1.4rem';
            case 'large':
                return '0 1.6rem';
            default:
                return '0 1.4rem';
        }
    }};
    font-size: ${(props: any) => {
        switch (props.size) {
            case 'small':
                return '0.8rem';
            case 'normal':
                return '0.9rem';
            case 'large':
                return '1rem';
            default:
                return '0.9rem';
        }
    }};
    height: ${(props: any) => {
        switch (props.size) {
            case 'small':
                return '2rem';
            case 'normal':
                return '2.4rem';
            case 'large':
                return '2.8rem';
            default:
                return '2.4rem';
        }
    }};
    cursor: ${(props: any) => {
        if (props.disabled) {
            return 'inherit';
        }
        return 'pointer';
    }};

    font-family: ${fontFamilySansSerif};

    border: none;
    outline: none;
    user-select: none;
    display: grid;
    place-content: center;
    line-height: 1.2;
    font-weight: bold;
    transition: box-shadow 200ms linear;
    position: relative;
    min-height: 40px;
    min-width: 160px;

    :hover {
        background-color: ${(props: any) => {
            if (props.disabled) {
                return '';
            }

            switch (props.level) {
                case 0:
                    return props.theme.backgroundColorSecondary;
                case 1:
                    return props.theme.backgroundColorTertiary;
                case 2:
                    return props.theme.backgroundColorQuaternary;
                case 3:
                    return props.theme.backgroundColorPrimary;
                default:
                    return props.theme.backgroundColorSecondary;
            }
        }};
    }

    :active {
        box-shadow: 0px 3px 3px 0px ${(props: any) => {
            return props.theme.boxShadowUmbraColor;
        }};
    }
`;


export const StyledPureButtonDiv: any = styled(StyledPureButton).attrs({
    as: 'div',
})`
    width: 100%;
`;
