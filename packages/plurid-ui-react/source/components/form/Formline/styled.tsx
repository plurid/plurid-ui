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

    @media (max-width: 800px) {
        grid-template-columns: 1fr;
    }
`;
