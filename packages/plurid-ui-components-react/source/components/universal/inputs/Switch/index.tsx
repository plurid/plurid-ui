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
        StyledSwitch,
        StyledSwitchSlider,
    } from './styled';
    // #endregion internal
// #endregion imports



// #region module
export interface SwitchProperties {
    theme?: Theme;
    level?: number;
    round?: boolean;
    exclusive?: boolean;
    checked: boolean;
    atChange: () => void;
}

const Switch: React.FC<SwitchProperties> = (
    properties,
) => {
    // #region properties
    const {
        theme,
        level,
        round,
        exclusive,
        checked,
        atChange,
    } = properties;

    const _theme = theme || pluridTheme;

    const _level = level === undefined
        ? 0
        : level;

    const _round = round === undefined
        ? true
        : round;
    // #endregion properties


    // #region render
    return (
        <StyledSwitch
            theme={_theme}
        >
            <input
                type="checkbox"
                checked={checked}
                onChange={() => atChange()}
            />
            <StyledSwitchSlider
                theme={_theme}
                level={_level}
                round={_round}
                exclusive={exclusive}
                checked={checked}
            />
        </StyledSwitch>
    );
    // #endregion render
}
// #endregion module



// #region exports
export default Switch;
// #endregion exports
