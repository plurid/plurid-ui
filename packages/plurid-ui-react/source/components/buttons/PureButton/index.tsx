import React from 'react';

import {
    plurid as pluridTheme,
    Theme,
} from '@plurid/plurid-themes';

import {
    StyledPureButton,
    StyledPureButtonDiv,
} from './styled';

import PluridSpinner from '../../markers/Spinner';



export interface PureButtonProperties {
    text: string;
    atClick: (event: React.MouseEvent) => void;

    theme?: Theme;
    level?: number;
    size?: 'small' | 'normal' | 'large';
    disabled?: boolean;
    loading?: boolean;

    style?: React.CSSProperties;
    className?: string;
}

const PureButton: React.FC<PureButtonProperties> = (
    properties,
) => {
    /** properties */
    const {
        text,
        atClick,

        theme,
        level,
        size,
        disabled,
        loading,

        style,
        className,
    } = properties;

    const _theme = theme === undefined
        ? pluridTheme
        : theme;

    const _level = level === undefined
        ? 0
        : level;

    const _size = size === undefined
        ? 'normal'
        : size;


    /** render */
    if (loading) {
        return (
            <StyledPureButtonDiv
                theme={_theme}
                level={_level}
                size={_size}
                disabled={disabled}
                style={{
                    ...style,
                }}
                className={className}
            >
                <PluridSpinner
                    theme={_theme}
                    size="small"
                />
            </StyledPureButtonDiv>
        );
    }

    return (
        <StyledPureButton
            theme={_theme}
            level={_level}
            size={_size}
            onClick={(event: React.MouseEvent) => !disabled ? atClick(event) : null}
            isDisabled={disabled}
            style={{
                ...style,
            }}
            className={className}
        >
            {text}
        </StyledPureButton>
    );
}


export default PureButton;
