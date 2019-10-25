import React from 'react';
import themes, { Theme } from '@plurid/plurid-themes';

import {
    StyledTextline,
} from './styled';



interface TextlineProperties {
    text: string;
    atChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
    atKeyDown?: (event: React.KeyboardEvent<HTMLInputElement>) => void;

    type?: 'text' | 'password';
    placeholder?: string;
    autoCapitalize?: string;
    autoComplete?: string;
    autoCorrect?: string;
    spellCheck?: boolean;

    theme?: Theme;
    level?: number;
    devisible?: boolean;
    center?: boolean;
    round?: boolean;
    width?: string | number;
}


/**
 * @param text `string`
 * @param atChange `(event: React.ChangeEvent<HTMLInputElement>) => void`
 * @param atKeyDown `(event: React.KeyboardEvent<HTMLInputElement>) => void`
 *
 * @param type optional - `'text' | 'password'`
 * @param placeholder optional - `string`
 * @param autoCapitalize optional - `string`
 * @param autoComplete optional - `string`
 * @param autoCorrect optional - `string`
 * @param spellCheck optional - `boolean`
 *
 * @param theme optional - `Theme`
 * @param level optional - `number`
 * @param devisible optional - `boolean`
 * @param center optional - `boolean`
 * @param round optional - `boolean`
 * @param width optional - `string | number`
 */
const Textline: React.FC<TextlineProperties> = (properties) => {
    const {
        text,
        atChange,
        atKeyDown,

        type,
        placeholder,
        autoCapitalize,
        autoComplete,
        autoCorrect,
        spellCheck,

        theme,
        level,
        devisible,
        center,
        round,
        width,
    } = properties;

    const _type = type === undefined
        ? 'text'
        : type;

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
            devisible={devisible}
            center={center}
            round={_round}
            width={width}
        >
            <input
                type={_type}

                value={text}
                onChange={atChange}
                onKeyDown={atKeyDown}

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
