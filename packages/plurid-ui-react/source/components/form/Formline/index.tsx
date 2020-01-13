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
    responsive?: boolean;
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
        responsive,

        /** default */
        children,
    } = properties;

    const _theme = theme === undefined
        ? themes.plurid
        : theme;

    const _level = level === undefined
        ? 0
        : level;

    const _responsive = responsive === undefined
        ? false
        : responsive;

    return (
        <StyledFormline
            style={{...style}}
            theme={_theme}
            level={_level}
            responsive={_responsive}
        >
            <StyledFormlineText>
                {text}
            </StyledFormlineText>

            <StyledFormlineElement
                responsive={_responsive}
            >
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
