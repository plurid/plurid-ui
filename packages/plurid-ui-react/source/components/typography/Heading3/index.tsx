import React from 'react';
import themes, { Theme } from '@plurid/plurid-themes';

import {
    StyledHeading3,
} from './styled';



interface Heading3Properties {
    theme?: Theme;
}

const Heading3: React.FC<React.PropsWithChildren<Heading3Properties>> = (properties) => {
    const {
        theme,
        children,
    } = properties;

    const _theme = theme === undefined
        ? themes.plurid
        : theme;

    return (
        <StyledHeading3
            theme={_theme}
        >
            {children}
        </StyledHeading3>
    );
}


export default Heading3;
