import React from 'react';
import themes, { Theme } from '@plurid/plurid-themes';

import {
    StyledHeading2,
} from './styled';



interface Heading2Properties {
    theme?: Theme;
}

const Heading2: React.FC<React.PropsWithChildren<Heading2Properties>> = (properties) => {
    const {
        theme,
        children,
    } = properties;

    const _theme = theme === undefined
        ? themes.plurid
        : theme;

    return (
        <StyledHeading2
            theme={_theme}
        >
            {children}
        </StyledHeading2>
    );
}


export default Heading2;
