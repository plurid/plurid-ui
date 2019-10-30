import React from 'react';

import {
    StyledSpinner,
    StyledLoader
} from './styled';

import themes, { Theme } from '@plurid/plurid-themes';



interface SpinnerProperties {
    theme?: Theme;
    size?: 'small' | 'normal' | 'large';
}

const Spinner: React.FC<SpinnerProperties> = (properties) => {
    const {
        theme,
        size,
    } = properties;

    const _theme = theme === undefined
        ? themes.plurid
        : theme;

    const _size = size === undefined
        ? 'normal'
        : size;

    return (
        <StyledSpinner>
            <StyledLoader
                theme={_theme}
                size={_size}
            />
        </StyledSpinner>
    );
}


export default Spinner;
