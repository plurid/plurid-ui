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
    checked: boolean;

    theme?: Theme;
    level?: number;
    round?: boolean;
    exclusive?: boolean;
    accent?: string;

    atChange: () => void;
}

const Switch: React.FC<SwitchProperties> = (
    properties,
) => {
    // #region properties
    const {
        checked,

        theme,
        level,
        round,
        exclusive,
        accent,

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
                accent={accent}
            />
        </StyledSwitch>
    );
    // #endregion render
}
// #endregion module



// #region exports
export default Switch;
// #endregion exports
