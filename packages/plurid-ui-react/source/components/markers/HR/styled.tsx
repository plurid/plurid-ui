import styled from 'styled-components';

import {
    Theme,
} from '@plurid/plurid-themes';



interface IStyledHR {
    theme: Theme;
}

export const StyledHR = styled.span<IStyledHR>`
    outline: 0;
    border: 0;
    margin-top: 1.2rem auto;
    height: 1px;

    background-color: ${(props: IStyledHR) => {
        return props.theme.colorPrimary;
    }};
`;
