import React from 'react';
import themes, { Theme } from '@plurid/plurid-themes';

import {
    PluridSpinner,
} from '../../../';

import {
    StyledLinkButton,
    StyledLinkButtonLoading,
} from './styled';



const DEFAULT_LEVEL = 0;

interface LinkButtonProperties {
    text: string;
    atClick: (event?: React.MouseEvent) => void;

    theme?: Theme;
    level?: number;
    inline?: boolean;
    disabled?: boolean;
    loading?: boolean;
}

const LinkButton: React.FC<LinkButtonProperties> = (properties) => {
    const {
        text,
        atClick,

        theme,
        level,
        inline,
        disabled,
        loading,
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

    return (
        <StyledLinkButton
            onClick={(event: React.MouseEvent) => !disabled ? atClick(event) : null}
            theme={_theme}
            level={_level}
            inline={inline}
            isDisabled={disabled}
        >
            {text}
        </StyledLinkButton>
    );
}


export default LinkButton;
