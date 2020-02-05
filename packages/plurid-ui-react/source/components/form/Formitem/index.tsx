import React from 'react';

import themes, {
    Theme,
} from '@plurid/plurid-themes';

import {
    StyledFormitem,
} from './styled';



interface FormitemProperties {
    theme?: Theme;
    level?: number;

    style?: React.CSSProperties;
    className?: string;
}

/**
 * Renders a form item.
 *
 * @param properties
 */
const Formitem: React.FC<FormitemProperties> = (
    properties,
) => {
    const {
        /** optional */
        theme,
        level,
        style,
        className,

        /** default */
        children,
    } = properties;

    const _theme = theme === undefined
        ? themes.plurid
        : theme;

    const _level = level === undefined
        ? 0
        : level;

    return (
        <StyledFormitem
            style={{...style}}
            className={className}
            theme={_theme}
            level={_level}
        >
            {children}
        </StyledFormitem>
    );
}


export default Formitem;
