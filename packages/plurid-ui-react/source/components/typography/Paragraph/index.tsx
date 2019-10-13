import React from 'react';
import themes, { Theme } from '@plurid/plurid-themes';

import {
    StyledParagraph,
} from './styled';



interface ParagraphProperties {
    theme?: Theme;
    size?: 'small' | 'normal' | 'large';
    fontFamily?: 'sans-serif' | 'serif';
}

const Paragraph: React.FC<React.PropsWithChildren<ParagraphProperties>> = (properties) => {
    const {
        theme,
        size,
        fontFamily,
        children,
    } = properties;

    const _theme = theme === undefined
        ? themes.plurid
        : theme;

    const _size = size === undefined
        ? 'normal'
        : size;

    const _fontFamily = fontFamily === undefined
        ? 'sans-serif'
        : fontFamily;

    return (
        <StyledParagraph
            theme={_theme}
            size={_size}
            fontFamily={_fontFamily}
        >
            {children}
        </StyledParagraph>
    );
}


export default Paragraph;
