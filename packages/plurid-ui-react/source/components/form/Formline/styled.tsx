import styled from 'styled-components';

import {
    Theme,
} from '@plurid/plurid-themes';



interface IStyledFormline {
    theme: Theme,
    level: number;
}

export const StyledFormline = styled.div<IStyledFormline>`
    display: grid;
    grid-template-columns: 1fr 1fr;
    align-items: center;
    min-height: 2rem;
    padding: 0.3rem 0.7rem;

    color: ${(props: IStyledFormline) => {
        return props.theme.colorPrimary;
    }};

    @media (max-width: 800px) {
        grid-template-columns: 1fr;
        justify-items: center;
        justify-content: center;
        min-height: 48px;
    }
`;


export const StyledFormlineText = styled.div`
    user-select: none;
`;


export const StyledFormlineElement = styled.div`
    justify-self: right;

    @media (max-width: 800px) {
        justify-self: center;
    }
`;
