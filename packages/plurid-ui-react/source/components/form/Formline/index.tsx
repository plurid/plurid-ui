import React from 'react';

import themes, {
    Theme,
} from '@plurid/plurid-themes';

import {
    StyledFormline,
    StyledFormlineText,
    StyledFormlineElement,
} from './styled';



interface FormlineProperties {
    text: string;

    Element?: React.FC;
    style?: React.CSSProperties;
    theme?: Theme;
    level?: number;
}

/**
 * Renders a descriptive text and a form element side by side.
 *
 * The form element can be passed as `Element` prop or as child.
 *
 * @param properties
 */
const Formline: React.FC<FormlineProperties> = (properties) => {
    const {
        /** required */
        text,

        /** optional */
        Element,
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
        <StyledFormline
            theme={_theme}
            level={_level}
            style={{...style}}
        >
            <StyledFormlineText>
                {text}
            </StyledFormlineText>

            <StyledFormlineElement>
                {Element
                ? (
                    <Element />
                ) : (
                    <>
                        {children}
                    </>
                )}
            </StyledFormlineElement>
        </StyledFormline>
    );
}


export default Formline;
