import React from 'react';
import themes, { Theme } from '@plurid/plurid-themes';

import {
    StyledTextline,
} from './styled';



interface SwitchProperties {
    text: string;
    atChange: (event: React.ChangeEvent<HTMLInputElement>) => void;

    placeholder?: string;
    autoCapitalize?: string;
    autoComplete?: string;
    autoCorrect?: string;
    spellCheck?: boolean;

    theme?: Theme;
    level?: number;
    round?: boolean;
    width?: string | number;
}

const Textline: React.FC<SwitchProperties> = (properties) => {
    const {
        text,
        atChange,

        placeholder,
        autoCapitalize,
        autoComplete,
        autoCorrect,
        spellCheck,

        theme,
        level,
        round,
        width,
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
            width={width}
        >
            <input
                type="text"

                value={text}
                onChange={atChange}

                placeholder={placeholder}
                autoCapitalize={autoCapitalize}
                autoComplete={autoComplete}
                autoCorrect={autoCorrect}
                spellCheck={spellCheck}
            />
        </StyledTextline>
    );
}


export default Textline;
