import React from 'react';
import themes, { Theme } from '@plurid/plurid-themes';

import {
    StyledTextline,
} from './styled';



interface SwitchProperties {
    text: string;
    placeholder?: string;
    theme?: Theme;
    level?: number;
    round?: boolean;
    atChange: () => void;
}

const Textline: React.FC<SwitchProperties> = (properties) => {
    const {
        text,
        placeholder,
        theme,
        level,
        round,
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
        <StyledTextline
            theme={_theme}
            level={_level}
            round={_round}
        >
            <input
                type="text"
                placeholder={placeholder}
                value={text}
                onChange={() => atChange()}
            />
        </StyledTextline>
    );
}


export default Textline;
