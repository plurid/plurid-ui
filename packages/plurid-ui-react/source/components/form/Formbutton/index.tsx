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
    iconPosition?: 'left' | 'center' | 'right';
    /**
     * Renders the button as is (without hover, cursor effects, and on click listen).
     */
    inactive?: boolean;

    style?: React.CSSProperties;
    className?: string;
}

/**
 * Renders an icon and a descriptive text, button-like.
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
        iconPosition,
        inactive,
        style,
        className,
    } = properties;

    const _theme = theme === undefined
        ? themes.plurid
        : theme;

    const _level = level === undefined
        ? 0
        : level;

    const _iconPosition = iconPosition === undefined
        ? 'center'
        : iconPosition;

    const _inactive = inactive === undefined
        ? false
        : inactive;

    return (
        <StyledFormbutton
            style={{...style}}
            className={className}
            onClick={(event) => !_inactive ? atClick(event) : null }
            theme={_theme}
            level={_level}
            inactive={_inactive}
        >
            <StyledFormbuttonIcon
                position={_iconPosition}
            >
                <Icon />
            </StyledFormbuttonIcon>

            <StyledFormbuttonText>
                {text}
            </StyledFormbuttonText>
        </StyledFormbutton>
    );
}


export default Formbutton;
