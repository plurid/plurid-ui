import React from 'react';

import themes, {
    Theme,
} from '@plurid/plurid-themes';

import {
    StyledLinkButton,
    StyledLinkButtonLoading,
} from './styled';

import PluridSpinner from '../../markers/Spinner';



const DEFAULT_LEVEL = 0;

export interface LinkButtonProperties {
    text: string;
    atClick: (event?: React.MouseEvent) => void;

    theme?: Theme;
    level?: number;
    inline?: boolean;
    disabled?: boolean;
    loading?: boolean;
    active?: boolean;

    style?: React.CSSProperties;
    className?: string;
}

const LinkButton: React.FC<LinkButtonProperties> = (
    properties,
) => {
    /** properties */
    const {
        text,
        atClick,

        theme,
        level,
        inline,
        disabled,
        loading,
        active,

        style,
        className,
    } = properties;

    const _theme = theme === undefined
        ? themes.plurid
        : theme;

    const _level = level === undefined
        ? DEFAULT_LEVEL
        : level;

    if (loading) {
        return (
            <StyledLinkButtonLoading>
                <PluridSpinner
                    size="small"
                    theme={_theme}
                />
            </StyledLinkButtonLoading>
        );
    }


    /** render */
    return (
        <StyledLinkButton
            onClick={(event: React.MouseEvent) => !disabled ? atClick(event) : null}
            theme={_theme}
            level={_level}
            inline={inline}
            isDisabled={disabled}
            isActive={active}
            style={{
                ...style,
            }}
            className={className}
        >
            {text}
        </StyledLinkButton>
    );
}


export default LinkButton;
