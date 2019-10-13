import React from 'react';
import themes, { Theme } from '@plurid/plurid-themes';

import {
    StyledPureButton,
} from './styled';



interface PureButtonProperties {
    theme?: Theme;
    level?: number;
    size?: 'small' | 'normal' | 'large';
    text: string;
    atClick: () => void;
}

const PureButton: React.FC<PureButtonProperties> = (properties) => {
    const {
        theme,
        level,
        size,
        text,
        atClick,
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

    return (
        <StyledPureButton
            theme={_theme}
            level={_level}
            size={_size}
            onClick={atClick}
        >
            {text}
        </StyledPureButton>
    );
}


export default PureButton;
