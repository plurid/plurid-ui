import React from 'react';

import themes, {
    Theme,
} from '@plurid/plurid-themes';

import {
    StyledScrollableLine,
} from './styled';



interface ScrollableLineProperties {
    text: string;

    theme?: Theme;
    level?: number;

    style?: React.CSSProperties;
    className?: string;
}

/**
 * Renders a horizontal scrollable line of text
 * based on the width of the container.
 *
 * @param properties
 */
const ScrollableLine: React.FC<ScrollableLineProperties> = (
    properties,
) => {
    const {
        /** required */
        text,

        /** optional */
        theme,
        level,

        style,
        className,
    } = properties;

    const _theme = theme === undefined
        ? themes.plurid
        : theme;

    const _level = level === undefined
        ? 0
        : level;


    return (
        <StyledScrollableLine
            style={{...style}}
            className={className}
            theme={_theme}
            level={_level}
        >
            {text}
        </StyledScrollableLine>
    );
}


export default ScrollableLine;
