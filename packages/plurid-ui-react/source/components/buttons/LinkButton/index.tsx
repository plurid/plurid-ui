import React from 'react';
import themes, { Theme } from '@plurid/plurid-themes';

import {
    StyledLinkButton,
} from './styled';



const DEFAULT_LEVEL = 0;

interface LinkButtonProperties {
    text: string;
    atClick: () => void;

    theme?: Theme;
    level?: number;
    inline?: boolean;
}

const LinkButton: React.FC<LinkButtonProperties> = (properties) => {
    const {
        text,
        atClick,

        theme,
        level,
        inline,
    } = properties;

    const _theme = theme === undefined
        ? themes.plurid
        : theme;

    const _level = level === undefined
        ? DEFAULT_LEVEL
        : level;

    return (
        <StyledLinkButton
            onClick={atClick}
            theme={_theme}
            level={_level}
            inline={inline}
        >
            {text}
        </StyledLinkButton>
    );
}


export default LinkButton;
