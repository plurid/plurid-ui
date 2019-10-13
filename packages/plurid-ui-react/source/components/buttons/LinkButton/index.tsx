import React from 'react';
import themes, { Theme } from '@plurid/plurid-themes';

import {
    StyledLinkButton,
} from './styled';



interface LinkButtonProperties {
    theme?: Theme;
    text: string;
    atClick: () => void;
}

const LinkButton: React.FC<LinkButtonProperties> = (properties) => {
    const {
        theme,
        text,
        atClick,
    } = properties;

    const _theme = theme === undefined
        ? themes.plurid
        : theme;

    return (
        <StyledLinkButton
            theme={_theme}
            onClick={atClick}
        >
            {text}
        </StyledLinkButton>
    );
}

export default LinkButton;
