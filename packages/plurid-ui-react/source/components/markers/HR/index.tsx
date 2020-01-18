import React from 'react';

import themes, {
    Theme,
} from '@plurid/plurid-themes';

import {
    StyledHR,
} from './styled';



interface HRProperties {
    theme?: Theme;
    style?: React.CSSProperties;
    className?: string;
}

const HR: React.FC<HRProperties> = (
    properties,
) => {
    const {
        /** optional */
        theme,
        style,
        className,
    } = properties;

    const _theme = theme === undefined
        ? themes.plurid
        : theme;

    return (
        <StyledHR
            theme={_theme}
            style={{
                ...style
            }}
            className={className}
        />
    );
}


export default HR;
