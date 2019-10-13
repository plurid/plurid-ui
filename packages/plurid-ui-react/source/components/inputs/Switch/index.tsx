import React from 'react';
import themes, { Theme } from '@plurid/plurid-themes';

import {
    StyledSwitch,
    StyledSwitchSlider,
} from './styled';



interface SwitchProperties {
    theme?: Theme;
    checked: boolean;
    atChange: () => void;
    round?: boolean;
}

const Switch: React.FC<SwitchProperties> = (properties) => {
    const {
        theme,
        checked,
        atChange,
        round,
    } = properties;

    const _theme = theme === undefined
        ? themes.plurid
        : theme;

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
                checked={checked}
                round={_round}
            />
        </StyledSwitch>
    );
}


export default Switch;
