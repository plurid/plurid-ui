import React from 'react';
import themes, { Theme } from '@plurid/plurid-themes';

import {
    StyledSimpleButton,
} from './styled';



interface SimpleButtonProperties {
    theme?: Theme;
    text: string;
    atClick: () => void;
}

const SimpleButton: React.FC<SimpleButtonProperties> = (properties) => {
    const {
        theme,
        text,
        atClick,
    } = properties;

    const _theme = theme === undefined
        ? themes.plurid
        : theme;

    return (
        <StyledSimpleButton
            theme={_theme}
            onClick={atClick}
        >
            {text}
        </StyledSimpleButton>
    );
}


export default SimpleButton;
