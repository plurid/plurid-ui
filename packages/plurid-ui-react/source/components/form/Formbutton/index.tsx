import React from 'react';

import themes, {
    Theme,
} from '@plurid/plurid-themes';

import {
    StyledFormbutton,
    StyledFormbuttonIcon,
    StyledFormbuttonText,
} from './styled';



interface FormbuttonProperties {
    text: string;
    Icon: React.FC;
    atClick: (event: React.MouseEvent<HTMLDivElement, MouseEvent>) => void;

    theme?: Theme;
    level?: number;

    style?: React.CSSProperties;
    className?: string;
}

/**
 * Renders an icon and a descriptive text.
 *
 * @param properties
 */
const Formbutton: React.FC<FormbuttonProperties> = (properties) => {
    const {
        /** required */
        text,
        Icon,
        atClick,

        /** optional */
        theme,
        level,
        style,
        className,
    } = properties;

    const _theme = theme === undefined
        ? themes.plurid
        : theme;

    const _level = level === undefined
        ? 0
        : level;

    return (
        <StyledFormbutton
            style={{...style}}
            className={className}
            theme={_theme}
            level={_level}
            onClick={(event) => atClick(event)}
        >
            <StyledFormbuttonIcon>
                <Icon />
            </StyledFormbuttonIcon>

            <StyledFormbuttonText>
                {text}
            </StyledFormbuttonText>
        </StyledFormbutton>
    );
}


export default Formbutton;
