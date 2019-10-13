import React from 'react';
import themes, { Theme } from '@plurid/plurid-themes';

import {
    StyledHeading1,
    StyledHeading2,
    StyledHeading3,
} from './styled';



interface HeadingProperties {
    theme?: Theme;
    type?: 'h1' | 'h2' | 'h3';
}

const Heading: React.FC<React.PropsWithChildren<HeadingProperties>> = (properties) => {
    const {
        theme,
        type,
        children,
    } = properties;

    const _theme = theme === undefined
        ? themes.plurid
        : theme;

    const _type = type === undefined
        ? 'h1'
        : type;

    switch (_type) {
        case 'h1':
            return (
                <StyledHeading1
                    theme={_theme}
                >
                    {children}
                </StyledHeading1>
            );
        case 'h2':
            return (
                <StyledHeading2
                    theme={_theme}
                >
                    {children}
                </StyledHeading2>
            );
        case 'h3':
            return (
                <StyledHeading3
                    theme={_theme}
                >
                    {children}
                </StyledHeading3>
            );
    }
}


export default Heading;
