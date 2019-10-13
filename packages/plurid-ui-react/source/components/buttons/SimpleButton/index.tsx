import React from 'react';
import themes, { Theme } from '@plurid/plurid-themes';

import {
    StyledSimpleButton,
} from './styled';



interface SimpleButtonProperties {
    theme?: Theme;
    level?: number;
    text: string;
    atClick: () => void;
}

const SimpleButton: React.FC<SimpleButtonProperties> = (properties) => {
    const {
        theme,
        level,
        text,
        atClick,
    } = properties;

    const _theme = theme === undefined
        ? themes.plurid
        : theme;

    const _level = level === undefined
        ? 0
        : level;

    return (
        <StyledSimpleButton
            theme={_theme}
            level={_level}
            onClick={atClick}
        >
            {text}
        </StyledSimpleButton>
    );
}


export default SimpleButton;
