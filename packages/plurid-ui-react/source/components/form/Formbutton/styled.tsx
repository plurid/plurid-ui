import styled from 'styled-components';

import {
    Theme,
} from '@plurid/plurid-themes';



interface IStyledFormbutton {
    theme: Theme,
    level: number;
}

export const StyledFormbutton = styled.div<IStyledFormbutton>`
    display: grid;
    grid-template-columns: 40px 1fr;
    align-items: center;
    min-height: 2rem;
    padding: 0.3rem 0.7rem;
    cursor: pointer;
    user-select: none;

    color: ${(props: IStyledFormbutton) => {
        return props.theme.colorPrimary;
    }};

    :hover {
        background-color: ${(props: IStyledFormbutton) => {
            return props.theme.backgroundColorSecondary;
        }};
    }
`;


export const StyledFormbuttonIcon = styled.div`
    justify-self: center;
`;


export const StyledFormbuttonText = styled.div`
`;
