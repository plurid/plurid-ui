import React from 'react';

import themes, {
    Theme,
} from '@plurid/plurid-themes';

import {
    StyledFormLeftRight,
} from './styled';



export interface FormLeftRightProperties {
    theme?: Theme;
    style?: React.CSSProperties;
    className?: string;
}

/**
 * Form left and right items
 *
 * @param properties
 */
const FormLeftRight: React.FC<FormLeftRightProperties> = (
    properties,
) => {
    const {
        /** optional */
        theme,
        style,
        className,

        /** default */
        children,
    } = properties;

    const _theme = theme === undefined
        ? themes.plurid
        : theme;

    return (
        <StyledFormLeftRight
            style={{
                ...style,
            }}
            className={className}
            theme={_theme}
        >
            {children}
        </StyledFormLeftRight>
    );
}


export default FormLeftRight;
