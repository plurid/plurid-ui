import React from 'react';
import themes, { Theme } from '@plurid/plurid-themes';

import {
    StyledSwitch,
    StyledSwitchSlider,
} from './styled';



interface SwitchProperties {
    theme?: Theme;
    level?: number;
    round?: boolean;
    exclusive?: boolean;
    checked: boolean;
    atChange: () => void;
}

const Switch: React.FC<SwitchProperties> = (properties) => {
    const {
        theme,
        level,
        round,
        exclusive,
        checked,
        atChange,
    } = properties;

    const _theme = theme === undefined
        ? themes.plurid
        : theme;

    const _level = level === undefined
        ? 0
        : level;

    const _round = round === undefined
        ? true
        : round;

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
}


export default Switch;
