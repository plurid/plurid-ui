// #region imports
    // #region libraries
    import styled from 'styled-components';

    import {
        Theme,
    } from '@plurid/plurid-themes';
    // #endregion libraries
// #endregion imports



// #region module
export interface IStyledInputLine {
    theme: Theme;
}

export const StyledInputLine = styled.div<IStyledInputLine>`
    width: 350px;
`;


export interface IStyledInputLineText {
    theme: Theme;
}

export const StyledInputLineText = styled.div<IStyledInputLineText>`
    text-align: left;
    font-size: 0.9rem;
    min-height: 1.1rem;
    margin-top: 1.3rem;
    margin-bottom: 0.4rem;
    margin-left: 0.9rem;
`;
// #endregion module
