import styled from 'styled-components';

import {
    Theme,
} from '@plurid/plurid-themes';



interface IStyledScrollableLine {
    theme: Theme,
    level: number;
}

export const StyledScrollableLine = styled.div<IStyledScrollableLine>`
    text-align: left;
    overflow: scroll;
    outline: none;
    white-space: nowrap;

    -ms-overflow-style: none;  /* Internet Explorer 10+ */
    scrollbar-width: none;  /* Firefox */
    ::-webkit-scrollbar {
        display: none;  /* Safari and Chrome */
    }
`;
