import React from 'react';
import themes, { Theme } from '@plurid/plurid-themes';

import {
    StyledPureButton,
    StyledPureButtonDiv,
} from './styled';

import PluridSpinner from '../../markers/Spinner';



interface PureButtonProperties {
    text: string;
    atClick: (event: React.MouseEvent) => void;

    theme?: Theme;
    level?: number;
    size?: 'small' | 'normal' | 'large';
    disabled?: boolean;
    loading?: boolean;
}

const PureButton: React.FC<PureButtonProperties> = (properties) => {
    const {
        text,
        atClick,

        theme,
        level,
        size,
        disabled,
        loading,
    } = properties;

    const _theme = theme === undefined
        ? themes.plurid
        : theme;

    const _level = level === undefined
        ? 0
        : level;

    const _size = size === undefined
        ? 'normal'
        : size;

    if (loading) {
        return (
            <StyledPureButtonDiv
                theme={_theme}
                level={_level}
                size={_size}
                disabled={disabled}
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
        >
            {text}
        </StyledPureButton>
    );
}


export default PureButton;
