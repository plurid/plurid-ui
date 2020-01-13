import styled from 'styled-components';

import {
    Theme,
} from '@plurid/plurid-themes';



interface IStyledItemsline {
    theme: Theme,
    level: number;
}

export const StyledItemsline = styled.div<IStyledItemsline>`
    padding: 0 0.7rem;
    font-size: 0.9rem;

    ul {
        list-style: none;
        padding: 0;
        margin-top: 0.4rem;
        margin-bottom: 0.8rem;
        display: flex;
        flex-wrap: wrap;
        flex-direction: row-reverse;
        justify-content: flex-start;
    }

    li {
        margin: 0 0.3rem;
        cursor: pointer;
        user-select: none;
        line-height: 1.2rem;

        :hover {
            text-decoration: line-through;
        }
    }
`;
