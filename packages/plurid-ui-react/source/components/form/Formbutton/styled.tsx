import styled from 'styled-components';

import {
    Theme,
} from '@plurid/plurid-themes';



interface IStyledFormbutton {
    theme: Theme,
    level: number;
    inactive: boolean;
    devisible: boolean;
}

export const StyledFormbutton = styled.div<IStyledFormbutton>`
    display: grid;
    grid-template-columns: 40px 1fr;
    align-items: center;
    min-height: 2rem;
    user-select: none;
    text-decoration: none;

    margin: ${(props: IStyledFormbutton) => {
        if (props.devisible) {
            return '0';
        }
        return 'initial';
    }};
    padding: ${(props: IStyledFormbutton) => {
        if (props.devisible) {
            return '0';
        }
        return '0.3rem 0.7rem';
    }};
    cursor: ${(props: IStyledFormbutton) => {
        if (props.inactive) {
            return 'default';
        }
        return 'pointer';
    }};
    color: ${(props: IStyledFormbutton) => {
        return props.theme.colorPrimary;
    }};

    :hover {
        background-color: ${(props: IStyledFormbutton) => {
            if (props.inactive || props.devisible) {
                return 'initial';
            }
            return props.theme.backgroundColorSecondary;
        }};
    }
`;


interface IStyledFormbuttonIcon {
    theme: Theme,
    position: 'left' | 'center' | 'right';
}

export const StyledFormbuttonIcon = styled.div<IStyledFormbuttonIcon>`
    justify-self: ${(props: IStyledFormbuttonIcon) => {
        return props.position;
    }};
    display: grid;
    place-content: center;
`;


export const StyledFormbuttonText = styled.div`
`;
