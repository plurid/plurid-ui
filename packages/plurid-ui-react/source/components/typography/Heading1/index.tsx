import React from 'react';
import themes, { Theme } from '@plurid/plurid-themes';

import {
    StyledHeading1,
} from './styled';



interface Heading1Properties {
    theme?: Theme;
}

const Heading1: React.FC<React.PropsWithChildren<Heading1Properties>> = (properties) => {
    const {
        theme,
        children,
    } = properties;

    const _theme = theme === undefined
        ? themes.plurid
        : theme;

    return (
        <StyledHeading1
            theme={_theme}
        >
            {children}
        </StyledHeading1>
    );
}


export default Heading1;
