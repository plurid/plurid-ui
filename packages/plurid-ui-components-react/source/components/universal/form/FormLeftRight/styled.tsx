import styled from 'styled-components';

import {
    Theme,
} from '@plurid/plurid-themes';



export interface IStyledFormLeftRight {
    theme: Theme,
}

export const StyledFormLeftRight = styled.div<IStyledFormLeftRight>`
    display: flex;
    align-items: center;
    justify-content: space-between;
`;
