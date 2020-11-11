// #region imports
    // #region libraries
    import React from 'react';

    import {
        plurid,
        Theme,
    } from '@plurid/plurid-themes';
    // #endregion libraries


    // #region external
    import PluridTextline from '../Textline';
    // #endregion external


    // #region internal
    import {
        StyledInputLine,
        StyledInputLineText,
    } from './styled';
    // #endregion internal
// #endregion imports



// #region module
export interface InputLineProperties {
    name: string;
    text: string;
    theme: Theme;
    atChange: (event: React.ChangeEvent<HTMLInputElement>) => void;

    atKeyDown?: (event: React.KeyboardEvent<HTMLInputElement>) => void;
    type?: 'text' | 'password' | undefined;
}

const InputLine: React.FC<InputLineProperties> = (
    properties,
) => {
    // #region properties
    const {
        text,
        name,
        atChange,
        theme,

        atKeyDown,
        type,
    } = properties;
    // #endregion properties


    // #region render
    return (
        <StyledInputLine>
            <StyledInputLineText>
                {text !== '' && (
                    <>
                        {name}
                    </>
                )}
            </StyledInputLineText>

            <PluridTextline
                text={text}
                type={type}
                placeholder={name}
                atChange={atChange}
                atKeyDown={atKeyDown}
                spellCheck={false}
                autoCapitalize="false"
                autoComplete="false"
                autoCorrect="false"
                theme={theme}
                level={2}
            />
        </StyledInputLine>
    );
    // #endregion render
}
// #endregion module



// #region exports
export default InputLine;
// #endregion exports
