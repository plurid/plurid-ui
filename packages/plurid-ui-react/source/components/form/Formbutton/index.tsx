import React from 'react';

import themes, {
    Theme,
} from '@plurid/plurid-themes';

import {
    StyledFormbutton,
    StyledFormbuttonIcon,
    StyledFormbuttonText,
} from './styled';



export interface FormbuttonProperties {
    text: string;
    Icon: React.FC;
    atClick: (event: React.MouseEvent<HTMLDivElement, MouseEvent>) => void;

    link?: string;
    target?: string;
    theme?: Theme;
    devisible?: boolean;
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
        link,
        target,
        theme,
        devisible,
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

    const _devisible = devisible === undefined
        ? false
        : devisible;

    const _iconPosition = iconPosition === undefined
        ? 'left'
        : iconPosition;

    const _inactive = inactive === undefined
        ? false
        : inactive;


    const render = () => (
        <>
            <StyledFormbuttonIcon
                position={_iconPosition}
            >
                <Icon />
            </StyledFormbuttonIcon>

            <StyledFormbuttonText>
                {text}
            </StyledFormbuttonText>
        </>
    );

    const renderProperties = {
        style: {...style},
        className: className,
        theme: _theme,
        level: _level,
        inactive: _inactive,
        devisible: _devisible,
    };


    if (link) {
        return (
            <StyledFormbutton
                onClick={(event: any) => !_inactive ? atClick(event) : null }
                as={'a'}
                href={link}
                target={target}
                {...renderProperties}
            >
                {render()}
            </StyledFormbutton>
        );
    }

    return (
        <StyledFormbutton
            onClick={(event) => !_inactive ? atClick(event as any) : null }
            {...renderProperties}
        >
            {render()}
        </StyledFormbutton>
    );
}


export default Formbutton;
