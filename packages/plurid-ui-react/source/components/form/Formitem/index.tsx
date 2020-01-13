import React from 'react';

import themes, {
    Theme,
} from '@plurid/plurid-themes';

import {
    StyledFormitem,
} from './styled';



interface FormitemProperties {
    style?: React.CSSProperties;
    theme?: Theme;
    level?: number;
}

/**
 * Renders an icon and a descriptive text.
 *
 * @param properties
 */
const Formitem: React.FC<FormitemProperties> = (properties) => {
    const {
        /** optional */
        style,
        theme,
        level,

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
            theme={_theme}
            level={_level}
            style={{...style}}
        >
            {children}
        </StyledFormitem>
    );
}


export default Formitem;
