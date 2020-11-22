import React from 'react';

import {
    StyledSpinner,
    StyledLoader
} from './styled';

import themes, { Theme } from '@plurid/plurid-themes';

import {
    Sizes,
} from '#data/interfaces';



export interface SpinnerProperties {
    theme?: Theme;
    size?: Sizes;
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
            >
                <div />
                <div />
                <div />
                <div />
            </StyledLoader>
        </StyledSpinner>
    );
}


export default Spinner;
