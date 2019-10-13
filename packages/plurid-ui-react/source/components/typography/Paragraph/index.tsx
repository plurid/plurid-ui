import React from 'react';
import themes, { Theme } from '@plurid/plurid-themes';

import {
    StyledParagraph,
} from './styled';



interface ParagraphProperties {
    theme?: Theme;
    size?: 'small' | 'normal' | 'large';
}

const Paragraph: React.FC<React.PropsWithChildren<ParagraphProperties>> = (properties) => {
    const {
        theme,
        size,
        children,
    } = properties;

    const _theme = theme === undefined
        ? themes.plurid
        : theme;

    const _size = size === undefined
        ? 'normal'
        : size;

    return (
        <StyledParagraph
            theme={_theme}
            size={_size}
        >
            {children}
        </StyledParagraph>
    );
}


export default Paragraph;
