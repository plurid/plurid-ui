import React, {
    useRef,
} from 'react';
import themes, { Theme } from '@plurid/plurid-themes';

import {
    StyledTextline,
    StyledEnterIcon,
} from './styled';



function setNativeValue(element: any, value: any) {
    const valueSetter = (Object as any).getOwnPropertyDescriptor(element, 'value').set;
    const prototype = Object.getPrototypeOf(element);
    const prototypeValueSetter = (Object as any).getOwnPropertyDescriptor(prototype, 'value').set;

    if (valueSetter && valueSetter !== prototypeValueSetter) {
        prototypeValueSetter.call(element, value);
    } else {
      valueSetter.call(element, value);
    }
}

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

    enterIcon?: boolean;
    enterAtClick?: () => void;
    escapeClear?: boolean;
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
 *
 * @param enterIcon optional - `boolean`
 * @param enterAtClick optional - `() => void`
 * @param escapeClear optional - `boolean`
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

        enterIcon,
        enterAtClick,
        escapeClear,
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

    const inputElement = useRef<HTMLInputElement>(null);

    const handleKeyDown = (event: React.KeyboardEvent<HTMLInputElement>) => {
        if (atKeyDown) {
            atKeyDown(event);
        }

        if (
            enterIcon
            && enterAtClick
            && event.key === 'Enter'
        ) {
            enterAtClick();
        }

        if (
            escapeClear
            && event.key === 'Escape'
            && inputElement.current
        ) {
            setNativeValue(inputElement.current, '');
            const _event = new Event('input', {
                bubbles: true
            });
            inputElement.current.dispatchEvent(_event);
        }
    }

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
                onKeyDown={handleKeyDown}

                placeholder={placeholder}
                autoCapitalize={autoCapitalize}
                autoComplete={autoComplete}
                autoCorrect={autoCorrect}
                spellCheck={spellCheck}

                ref={inputElement}
            />

            {
                enterIcon
                && enterAtClick
                && text.length > 0
                && (
                    <StyledEnterIcon
                        theme={_theme}
                        onClick={() => enterAtClick()}
                    >
                        ➔
                    </StyledEnterIcon>
                )
            }
        </StyledTextline>
    );
}


export default Textline;
