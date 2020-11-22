// #region imports
    // #region libraries
    import React from 'react';

    import {
        StyledSpinner,
        StyledLoader
    } from './styled';

    import {
        plurid as pluridTheme,
        Theme,
    } from '@plurid/plurid-themes';
    // #endregion libraries


    // #region external
    import {
        Sizes,
    } from '#data/interfaces';
    // #endregion external
// #endregion imports



// #region module
export interface SpinnerProperties {
    theme?: Theme;
    size?: Sizes;
}

const Spinner: React.FC<SpinnerProperties> = (
    properties,
) => {
    // #region properties
    const {
        theme,
        size,
    } = properties;

    const _theme = theme || pluridTheme;
    const _size = size || 'normal';
    // #endregion properties


    // #region render
    return (
        <StyledSpinner>
            <StyledLoader
                theme={_theme}
                size={_size}
            >
                <div />
                <div />
                <div />
                <div />
            </StyledLoader>
        </StyledSpinner>
    );
    // #endregion render
}
// #endregion module



// #region exports
export default Spinner;
// #endregion exports
