// #region imports
    // #region libraries
    import React, {
        useRef,
        forwardRef,
    } from 'react';

    import {
        plurid,
        Theme,
    } from '@plurid/plurid-themes';
    // #endregion libraries


    // #region external
    import {
        setNativeValue,
    } from '../../../utilities/input';

    import {
        mergeReferences,
    } from '../../../utilities/react';
    // #endregion external


    // #region internal
    import {
        StyledTextline,
        StyledEnterIcon,
    } from './styled';
    // #endregion internal
// #endregion imports



// #region module
export interface TextlineProperties {
    text: string;
    atChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
    atKeyDown?: (event: React.KeyboardEvent<HTMLInputElement>) => void;
    atFocus?: (event: React.FocusEvent<HTMLInputElement>) => void;
    atBlur?: (event: React.FocusEvent<HTMLInputElement>) => void;

    type?: 'text' | 'password' | 'number';
    placeholder?: string;
    autoCapitalize?: string;
    autoComplete?: string;
    autoCorrect?: string;
    spellCheck?: boolean;
    style?: React.CSSProperties;
    className?: string;

    theme?: Theme;
    level?: number;
    devisible?: boolean;
    center?: boolean;
    round?: boolean;
    width?: string | number;

    enterIconLeft?: boolean;
    enterAtClick?: () => void;
    escapeClear?: boolean;

    ariaLabel?: string;
}

export type TextlineType = TextlineProperties & React.RefAttributes<any>;

/**
 * @param text `string`
 * @param atChange `(event: React.ChangeEvent<HTMLInputElement>) => void`
 * @param atKeyDown `(event: React.KeyboardEvent<HTMLInputElement>) => void`
 * @param atFocus `(event: React.FocusEvent<HTMLInputElement>) => void`
 * @param atBlur `(event: React.FocusEvent<HTMLInputElement>) => void`
 *
 * @param type optional - `'text' | 'password'`
 * @param placeholder optional - `string`
 * @param autoCapitalize optional - `string`
 * @param autoComplete optional - `string`
 * @param autoCorrect optional - `string`
 * @param spellCheck optional - `boolean`
 * @param style optional - `React.CSSProperties`
 *
 * @param theme optional - `Theme`
 * @param level optional - `number`
 * @param devisible optional - `boolean`
 * @param center optional - `boolean`
 * @param round optional - `boolean`
 * @param width optional - `string | number`
 *
 * @param enterIconLeft optional - `boolean`
 * @param enterAtClick optional - `() => void`
 * @param escapeClear optional - `boolean`
 *
 * @param ariaLabel optiona - `boolean`
 */
const Textline: React.ForwardRefExoticComponent<TextlineType> = forwardRef<HTMLInputElement, TextlineProperties>((
    properties,
    reference,
) => {
    // #region properties
    const {
        text,
        atChange,
        atKeyDown,
        atFocus,
        atBlur,

        type,
        placeholder,
        autoCapitalize,
        autoComplete,
        autoCorrect,
        spellCheck,
        style,
        className,

        theme,
        level,
        devisible,
        center,
        round,
        width,

        enterIconLeft,
        enterAtClick,
        escapeClear,

        ariaLabel,
    } = properties;

    const _type = type || 'text';
    const _theme = theme || plurid;
    const _level = level ?? 0;
    const _round = round ?? true;
    // #endregion properties


    // #region references
    const inputElement = useRef<HTMLInputElement | null>();
    // #endregion references


    // #region handlers
    const handleKeyDown = (
        event: React.KeyboardEvent<HTMLInputElement>,
    ) => {
        if (!inputElement.current) {
            return;
        }

        if (atKeyDown) {
            atKeyDown(event);
        }

        if (
            enterAtClick
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
                bubbles: true,
            });
            inputElement.current.dispatchEvent(_event);
        }
    }
    // #endregion handlers


    // #region render
    return (
        <StyledTextline
            theme={_theme}
            level={_level}
            devisible={devisible}
            center={center}
            round={_round}
            width={width}
            className={className}
        >
            <input
                type={_type}

                value={text}
                onChange={atChange}
                onKeyDown={handleKeyDown}
                onFocus={atFocus}
                onBlur={atBlur}

                placeholder={placeholder}
                autoCapitalize={autoCapitalize}
                autoComplete={autoComplete}
                autoCorrect={autoCorrect}
                spellCheck={spellCheck}

                aria-label={ariaLabel}

                style={{
                    ...style,
                }}

                ref={mergeReferences(
                    inputElement,
                    reference,
                )}
            />

            {
                enterAtClick
                && text.length > 0
                && (
                    <StyledEnterIcon
                        theme={_theme}
                        onClick={() => enterAtClick()}
                        left={enterIconLeft}
                    >
                        ➔
                    </StyledEnterIcon>
                )
            }
        </StyledTextline>
    );
    // #endregion render
});
// #endregion module



// #region exports
export default Textline;
// #endregion exports
