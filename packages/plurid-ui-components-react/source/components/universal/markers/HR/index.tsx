// #region imports
    // #region libraries
    import React from 'react';

    import {
        plurid as pluridTheme,
        Theme,
    } from '@plurid/plurid-themes';
    // #endregion libraries


    // #region internal
    import {
        StyledHR,
    } from './styled';
    // #endregion internal
// #endregion imports



// #region module
export interface HRProperties {
    theme?: Theme;
    style?: React.CSSProperties;
    className?: string;
}

const HR: React.FC<HRProperties> = (
    properties,
) => {
    // #region properties
    const {
        /** optional */
        theme,
        style,
        className,
    } = properties;

    const _theme = theme || pluridTheme;
    // #endregion properties


    // #region render
    return (
        <StyledHR
            theme={_theme}
            style={{
                ...style
            }}
            className={className}
        />
    );
    // #endregion render
}
// #endregion module



// #region exports
export default HR;
// #endregion exports
