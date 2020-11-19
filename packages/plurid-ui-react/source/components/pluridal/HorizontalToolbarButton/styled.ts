import styled from 'styled-components';

import {
    Theme,
} from '@plurid/plurid-themes';

import {
    fontFamilySansSerif,
} from '../../../data/constants';



interface IStyledHorizontalToolbarButton {
    active?: boolean;
    scaleIcon?: boolean;
    theme: Theme;
}

export const StyledHorizontalToolbarButton = styled.div<IStyledHorizontalToolbarButton>`
    position: relative;
    cursor: pointer;
    user-select: none;
    font-weight: normal;
    transition: transform 50ms ease-in-out;
    height: 45px;
    min-width: 2rem;
    padding: 0 1rem;
    display: flex;
    align-items: center;
    justify-content: center;

    background-color: ${
        (props: IStyledHorizontalToolbarButton) => {
            if (props.active) {
                return props.theme.backgroundColorTertiary;
            }
            return 'transparent';
        }
    };
    color: ${
        (props: IStyledHorizontalToolbarButton) => {
            return props.theme.colorPrimary;
        }
    };
    font-family: ${fontFamilySansSerif};

    :hover {
        background: ${(props: IStyledHorizontalToolbarButton) => {
            return props.theme.backgroundColorTertiary;
        }};
    }

    :hover svg {
        transform: ${(props: IStyledHorizontalToolbarButton) => {
            if (props.scaleIcon) {
                return 'scale(1.2)';
            }
            return '';
        }};
    }

    svg {
        transition: transform 100ms linear;
        transform: ${(props: IStyledHorizontalToolbarButton) => {
            if (props.active && props.scaleIcon) {
                return 'scale(1.2)';
            }
            return '';
        }};
    }
`;


interface IStyledHorizontalToolbarButtonIcon {
    text: string;
}

export const StyledHorizontalToolbarButtonIcon = styled.div<IStyledHorizontalToolbarButtonIcon>`
    display: flex;
    align-items: center;
    margin-right: ${({ text, }: IStyledHorizontalToolbarButtonIcon) => {
        if (text === '') {
            return '0';
        }
        return '0.5rem';
    }};
`;
